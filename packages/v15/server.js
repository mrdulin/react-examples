const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
// const multiparty = require('multiparty');
const util = require('util');
const webpackConfig = require('./webpack.config');

const port = process.env.PORT || webpackConfig.PORT;
const app = express();

const __PRODUCTION__ = process.env.NODE_ENV === 'production';

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const static = __PRODUCTION__ ? 'docs' : 'dist';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/' + static));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, static, 'index.html'));
});

app.get('/city', (req, res) => {
    const city = {
        "data": [
            {
                "key": "shanghai",
                "name": "上海"
            }, {
                "key": "beijing",
                "name": "北京"
            }, {
                "key": "shenzhen",
                "name": "深圳"
            }, {
                "key": "hangzhou",
                "name": "杭州"
            }
        ]
    };
    res.status(200).json(city);
})

app.get('/me', (req, res) => {
    const me = {
        "name": "novaline",
        "age": 26,
        "job": "web developer"
    };

    res.status(200).json(me);
});

app.get('/v2/city', (req, res) => {
    const cityMap = {
        "shanghai": "上海",
        "beijing": "北京",
        "shenzhen": "深圳",
        "hangzhou": "杭州"
    }
    res.status(200).json(cityMap);
});

app.post('/login', (req, res) => {
    const form = new multiparty.Form();
    form.parse(req, function(err, fields, files) {
        res.status(200).json({
            username: fields.username[0]
        });
    });
});

app.listen(port, function onAppListening(err) {
    if (err) {
        console.error(err);
    } else {
        console.info('==> Webpack development server listening on port %s', port);
    }
});
