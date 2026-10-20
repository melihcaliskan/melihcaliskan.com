// Generates favicons, app icons and the Open Graph image into /public.
// Run once (or after changing the design): `npm run og`
import { writeFile } from 'node:fs/promises';
import { deflateSync } from 'node:zlib';
import sharp from 'sharp';

const pub = new URL('../public/', import.meta.url);
const INK = '#202020';
const PAPER = '#fafafa';

// "M" monogram drawn as a path so it renders identically everywhere (no font needed).
const monogram = (bg, fg, radius = 22) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="${radius}" fill="${bg}"/>
  <path d="M26 72V30l24 28 24-28v42" fill="none" stroke="${fg}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

// Adaptive SVG favicon: light tile on dark browser chrome and vice versa.
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <style>rect{fill:${INK}}path{stroke:${PAPER}}@media (prefers-color-scheme:dark){rect{fill:${PAPER}}path{stroke:${INK}}}</style>
  <rect width="100" height="100" rx="22"/>
  <path d="M26 72V30l24 28 24-28v42" fill="none" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const png = (svg, size) => sharp(Buffer.from(svg)).resize(size, size).png().toBuffer();

// Minimal ICO container wrapping a single PNG image.
function ico(pngBuf, size) {
  const header = Buffer.alloc(22);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // image count
  header.writeUInt8(size, 6);
  header.writeUInt8(size, 7);
  header.writeUInt16LE(1, 10); // colour planes
  header.writeUInt16LE(32, 12); // bits per pixel
  header.writeUInt32LE(pngBuf.length, 14);
  header.writeUInt32LE(22, 18); // offset
  return Buffer.concat([header, pngBuf]);
}

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${INK}"/>
  <g font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="800" font-size="76" letter-spacing="-1.5">
    <text x="96" y="250" fill="#9ca3af">Hi, I’m <tspan fill="#f3f4f6">Melih Çalışkan</tspan>,</text>
    <text x="96" y="345" fill="#9ca3af">a <tspan fill="#f3f4f6">Software Developer</tspan></text>
    <text x="96" y="440" fill="#9ca3af">working at <tspan fill="#f3f4f6">TradeKart</tspan></text>
  </g>
  <line x1="96" x2="1104" y1="530" y2="530" stroke="#ffffff" stroke-opacity="0.1" stroke-width="2"/>
  <text x="96" y="578" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="28" fill="#9ca3af">melihcaliskan.com</text>
</svg>`;

const tile = monogram(INK, PAPER);
const appTile = monogram(INK, PAPER, 0); // full-bleed: iOS/Android apply their own mask


// HDR fill for hovered text: 16-bit PNG tagged PQ via a cICP chunk, so HDR
// displays show it brighter than SDR white. A soft vertical sheen (1000→700 nits).
function pq(nits) {
  const m1 = 0.1593017578125, m2 = 78.84375, c1 = 0.8359375, c2 = 18.8515625, c3 = 18.6875;
  const y = Math.pow(nits / 10000, m1);
  return Math.pow((c1 + c2 * y) / (1 + c3 * y), m2);
}
const crcTable = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});
const crc32 = (buf) => {
  let c = 0xffffffff;
  for (const b of buf) c = crcTable[(c ^ b) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
};
const chunk = (type, data) => {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
};
function hdrPng(width = 4, height = 64) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 16; // bit depth
  ihdr[9] = 2; // truecolor RGB
  // cICP: BT.2020 primaries (9), PQ transfer (16), RGB matrix (0), full range (1)
  const cicp = Buffer.from([9, 16, 0, 1]);
  const rows = [];
  for (let y = 0; y < height; y++) {
    const nits = 1000 - (300 * y) / (height - 1);
    const v = Math.round(pq(nits) * 65535);
    const row = Buffer.alloc(1 + width * 6);
    for (let x = 0; x < width; x++) for (let c = 0; c < 3; c++) row.writeUInt16BE(v, 1 + x * 6 + c * 2);
    rows.push(row);
  }
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('cICP', cicp),
    chunk('IDAT', deflateSync(Buffer.concat(rows))),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

await Promise.all([
  writeFile(new URL('hdr-white.png', pub), hdrPng()),
  writeFile(new URL('favicon.svg', pub), faviconSvg),
  png(tile, 32).then((b) => writeFile(new URL('favicon.ico', pub), ico(b, 32))),
  png(appTile, 180).then((b) => writeFile(new URL('apple-touch-icon.png', pub), b)),
  png(appTile, 192).then((b) => writeFile(new URL('icon-192.png', pub), b)),
  png(appTile, 512).then((b) => writeFile(new URL('icon-512.png', pub), b)),
  sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toBuffer().then((b) => writeFile(new URL('og.png', pub), b)),
]);

console.log('✓ Images written to public/');
