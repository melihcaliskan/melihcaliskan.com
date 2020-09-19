/*
    OPENGRAPH QUERY
    {
    user(login: "melihcaliskan") {
        pinnedItems(first: 6, types: [REPOSITORY, GIST]) {
        totalCount
            edges {
                node {
                ... on Repository {
                            name
                            shortDescriptionHTML
                            url
                            openGraphImageUrl
                        }
                    }
                }
            }
        }
    }
*/

const qraphQlResponse = {
    "data": {
        "user": {
            "pinnedItems": {
                "totalCount": 6,
                "edges": [
                    {
                        "node": {
                            "name": "getir-frontend",
                            "url": "https://github.com/melihcaliskan/getir-frontend",
                            "openGraphImageUrl": "https://repository-images.githubusercontent.com/295018943/80892c80-facb-11ea-9294-12773d4f09db",
                            "shortDescriptionHTML": "getir web app."
                        }
                    },
                    {
                        "node": {
                            "name": "longus-front-end",
                            "url": "https://github.com/melihcaliskan/longus-front-end",
                            "openGraphImageUrl": "https://repository-images.githubusercontent.com/262611684/7109e380-facb-11ea-805f-84da86f09a1b",
                            "shortDescriptionHTML": "Find the chronic issues of your next device."
                        }
                    },
                    {
                        "node": {
                            "name": "longus-translate-locales",
                            "url": "https://github.com/melihcaliskan/longus-translate-locales",
                            "openGraphImageUrl": "https://avatars2.githubusercontent.com/u/12929044?s=400&v=4",
                            "shortDescriptionHTML": ""
                        }
                    },
                    {
                        "node": {
                            "name": "hackerrank-javascript",
                            "url": "https://github.com/melihcaliskan/hackerrank-javascript",
                            "openGraphImageUrl": "https://avatars2.githubusercontent.com/u/12929044?s=400&v=4",
                            "shortDescriptionHTML": ""
                        }
                    },
                    {
                        "node": {
                            "name": "yemek-onerici",
                            "url": "https://github.com/melihcaliskan/yemek-onerici",
                            "openGraphImageUrl": "https://avatars2.githubusercontent.com/u/12929044?s=400&v=4",
                            "shortDescriptionHTML": ""
                        }
                    },
                    {
                        "node": {
                            "name": "iot_ev_otomasyonu",
                            "url": "https://github.com/melihcaliskan/iot_ev_otomasyonu",
                            "openGraphImageUrl": "https://avatars2.githubusercontent.com/u/12929044?s=400&v=4",
                            "shortDescriptionHTML": ""
                        }
                    }
                ]
            }
        }
    }
}

export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(qraphQlResponse.data.user.pinnedItems.edges))
}