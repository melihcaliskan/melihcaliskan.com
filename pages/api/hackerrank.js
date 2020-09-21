const data = {
  certs: [{
    id: 0,
    photo: "/hackerrank/certs/cert-1.png"
  },
  {
    id: 1,
    photo: "/hackerrank/certs/cert-2.png"
  }],

  badges: [{
    id: 0,
    photo: "/hackerrank/badges/badge-1.png"
  },
  {
    id: 1,
    photo: "/hackerrank/badges/badge-2.png"
  },
  {
    id: 2,
    photo: "/hackerrank/badges/badge-3.png"
  },
  {
    id: 3,
    photo: "/hackerrank/badges/badge-4.png"
  }]
}
export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(data))
}