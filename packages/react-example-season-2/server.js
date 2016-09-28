const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const app = express();

const host = 'http://apis.juhe.cn';
const port = 3003;
const appKey = 'd50bed2f4503d59bf5ccaef7d9de405b';

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded(extended: true)); 

app.get('/ip/ip2addr', (req, res) => {
    const url = util.API + '/ip/ip2addr' + `?ip=${this.state.ip}&key=${appKey}`;

    request
        .get({url}, (err, response, body) => {
            if (!err && response.statusCode == 200) {
                res.json(body);
            }
        })
});

app.listen(port, err => {
    if(err) throw err;
    console.log(`Server is listen on port ${port}`);
});


    