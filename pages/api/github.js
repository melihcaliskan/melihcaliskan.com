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
                primaryLanguage {
                name
                id
                color
                }
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
              "shortDescriptionHTML": "getir web app.",
              "url": "https://github.com/melihcaliskan/getir-frontend",
              "openGraphImageUrl": "https://repository-images.githubusercontent.com/295018943/583d3180-fc75-11ea-84c9-257e2beee4b7",
              "primaryLanguage": {
                "name": "JavaScript",
                "id": "MDg6TGFuZ3VhZ2UxNDA=",
                "color": "#ffed5f"
              }
            }
          },
          {
            "node": {
              "name": "longus-front-end",
              "shortDescriptionHTML": "Find the chronic issues of your next device.",
              "url": "https://github.com/melihcaliskan/longus-front-end",
              "openGraphImageUrl": "https://repository-images.githubusercontent.com/262611684/61c69980-fc75-11ea-8de7-53c0a151e82a",
              "primaryLanguage": {
                "name": "JavaScript",
                "id": "MDg6TGFuZ3VhZ2UxNDA=",
                "color": "#ffed5f"
              }
            }
          },
          {
            "node": {
              "name": "longus-translate-locales",
              "shortDescriptionHTML": "",
              "url": "https://github.com/melihcaliskan/longus-translate-locales",
              "openGraphImageUrl": "https://avatars2.githubusercontent.com/u/12929044?s=400&v=4",
              "primaryLanguage": {
                "name": "JavaScript",
                "id": "MDg6TGFuZ3VhZ2UxNDA=",
                "color": "#ffed5f"
              }
            }
          },
          {
            "node": {
              "name": "hackerrank",
              "shortDescriptionHTML": "Solutions to HackerRank problems",
              "url": "https://github.com/melihcaliskan/hackerrank",
              "openGraphImageUrl": "https://repository-images.githubusercontent.com/296387736/f500ce80-fc77-11ea-8c58-4afc44bb6f11",
              "primaryLanguage": {
                "name": "JavaScript",
                "id": "MDg6TGFuZ3VhZ2UxNDA=",
                "color": "#ffed5f"
              }
            }
          },
          {
            "node": {
              "name": "yemek-onerici",
              "shortDescriptionHTML": "131715123 - Veritabanı Yönetimi Sistemleri dersi için, C# ve MSSQL ile geliştirilen ödev projesi.",
              "url": "https://github.com/melihcaliskan/yemek-onerici",
              "openGraphImageUrl": "https://repository-images.githubusercontent.com/212600681/f366f300-fcd7-11ea-9127-551dff946711",
              "primaryLanguage": {
                "name": "C#",
                "id": "MDg6TGFuZ3VhZ2UyMzI=",
                "color": "#178600"
              }
            }
          },
          {
            "node": {
              "name": "iot_ev_otomasyonu",
              "shortDescriptionHTML": "131715504 - Nesnelerin İnterneti (Tek. Seç. Ders I), Arduino ile geliştirilen ödev projesi.",
              "url": "https://github.com/melihcaliskan/iot_ev_otomasyonu",
              "openGraphImageUrl": "https://repository-images.githubusercontent.com/228886081/9b30f080-fcd9-11ea-93bf-32081d54a5ae",
              "primaryLanguage": {
                "name": "C++",
                "id": "MDg6TGFuZ3VhZ2UxNDI=",
                "color": "#f34b7d"
              }
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