const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();

const host = 'http://apis.juhe.cn';
const port = 3003;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 

app.get('/ip/ip2addr', (req, res, next) => {
    const {ip, key: appKey} = req.query;
    const url = host + '/ip/ip2addr' + `?ip=${ip}&key=${appKey}`;
    req.api = url;
    next();
}, get);

app.get('/mobile/get', (req, res, next) => {
    const {phone, key: appKey} = req.query;
    const url = host + '/mobile/get' + `?phone=${phone}&key=${appKey}`;
    req.api = url;
    next();
}, get);

function get(req, res) {

     http.get(req.api, (response) => {
        let body = '';
        response.on('data', (chunk) => {
            body += chunk;
        }).on('end', () => {
            res.json(JSON.parse(body))
        })
    }).on('error', (e) => {
        res.json(e);
        console.log(`problem with request: ${e.message}`);
    });
    // request
    //     .get({url: req.api}, (err, response, body) => {
    //         if(err){
    //             return res.json(err)
    //         }

    //         if (!err && response.statusCode == 200) {
    //             res.json(JSON.parse(body));
    //         }
    //     })
}

app.listen(port, err => {
    if(err) throw err;
    console.log(`Server is listen on port ${port}`);
});


    