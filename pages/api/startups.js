const data = [
  {
    id: 0,
    name: "longus.io",
    ss: "/startups/longus.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque libero et lorem malesuada, ac mollis libero sagittis. Donec eu rhoncus ex. In finibus aliquam elit, a efficitur augue rhoncus sit amet.",
    platform: "react",
    url: "https://schopup.com/",
    images: ["/schopup/1.png", "/schopup/2.png", "/schopup/3.png", "/schopup/4.png", "/schopup/5.png", "/schopup/6.png"],
    technologies: ["Netx.js", "React", "Express", "Sequelize"]
  },
  {
    id: 1,
    name: "Catch Material",
    ss: "/startups/catchmaterial.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque libero et lorem malesuada, ac mollis libero sagittis. Donec eu rhoncus ex. In finibus aliquam elit, a efficitur augue rhoncus sit amet.",
    platform: "react",
    url: "https://schopup.com/",
    images: ["/schopup/1.png", "/schopup/2.png", "/schopup/3.png", "/schopup/4.png", "/schopup/5.png", "/schopup/6.png"],
    technologies: ["React", "Express", "Sequelize"]
  },
]
export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(data))
}