const data = [
    {
        id: 0,
        name: "Schopup",
        logo:"/schopup/logo.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque libero et lorem malesuada, ac mollis libero sagittis. Donec eu rhoncus ex. In finibus aliquam elit, a efficitur augue rhoncus sit amet.",
        platform: "rn",
        url: "https://schopup.com/",
        images: ["/schopup/1.png", "/schopup/2.png", "/schopup/3.png", "/schopup/4.png", "/schopup/5.png", "/schopup/6.png"],
        technologies: ["React Native", "Express", "Sequelize"]
    },
]
export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
}