let http = require("http");

const PORT = 8080;

console.log('Server started');

const mockData = [
    [
        {
            "_id": "1d7df7a80139c9c0312b1121",
            "type": "tractor", // tractor | drone
            "createdAt": "2020-03-11T17:33:53.119Z",
            "updatedAt": "2020-03-11T18:33:53.119Z",
            "status": "on-mission", // unreachable | idle | on-mission
            "location": {
                "latitude": "37.429425176781145",
                "longitude": "-122.09302096082834",
                "updatedAt": "2019-09-15T20:14:02.877Z"
            }
        },
        {
            "_id": "1d7df7a80139c9c0312b1122",
            "type": "drone",
            "createdAt": "2020-04-11T17:33:53.119Z",
            "updatedAt": "2020-04-11T18:33:53.119Z",
            "status": "unreachable",
            "location": {
                "latitude": "37.42771617807276",
                "longitude": "-122.09255464861556",
                "updatedAt": "2019-09-15T20:14:02.877Z"
            }
        },
        {
            "_id": "1d7df7a80139c9c0312b1123",
            "type": "tractor",
            "createdAt": "2020-05-11T17:33:53.119Z",
            "updatedAt": "2020-05-11T18:33:53.119Z",
            "status": "idle",
            "location": {
                "latitude": "37.42985237289512",
                "longitude": "-122.08776019402396",
                "updatedAt": "2019-09-15T20:14:02.877Z"
            }
        }
    ],
    [
        {
            "_id": "1d7df7a80139c9c0312b1121",
            "type": "tractor", // tractor | drone
            "createdAt": "2020-03-11T17:33:53.119Z",
            "updatedAt": "2020-03-11T18:33:53.119Z",
            "status": "on-mission", // unreachable | idle | on-mission
            "location": {
                "latitude": "37.42985242305784",
                "longitude": "-122.09341552651759",
                "updatedAt": "2019-09-15T20:24:02.877Z"
            }
        },
        {
            "_id": "1d7df7a80139c9c0312b1122",
            "type": "drone",
            "createdAt": "2020-04-11T17:33:53.119Z",
            "updatedAt": "2020-04-11T18:33:53.119Z",
            "status": "unreachable",
            "location": {
                "latitude": "37.42995686851945",
                "longitude": "-122.09051014680624",
                "updatedAt": "2019-09-15T20:24:02.877Z"
            }
        },
        {
            "_id": "1d7df7a80139c9c0312b1123",
            "type": "tractor",
            "createdAt": "2020-05-11T17:33:53.119Z",
            "updatedAt": "2020-05-11T18:33:53.119Z",
            "status": "idle",
            "location": {
                "latitude": "37.4266717673727",
                "longitude": "-122.08948199965023",
                "updatedAt": "2019-09-15T20:24:02.877Z"
            }
        }
    ]
]

let dataSwitch = 0;

http.createServer((req, res) => {
    console.log(req.url);
    let data = mockData[dataSwitch];
    dataSwitch ^= 1;

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(data));
}).listen(PORT);