const express = require('express');
const request = require('request');
const app = express();

const host = 'http://apis.juhe.cn';

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/ip/ip2addr', (req, res) => {
    request
        .get({url: `${host}/ip/ip2addr?ip=104.224.139.200&dtype=&key=d50bed2f4503d59bf5ccaef7d9de405b`}, (err, response, body) => {
            if (!err && response.statusCode == 200) {
                res.json(body);
            }
        })
});


    