const express = require('express');

// const fetch = require('node-fetch');
// const Joi = require('joi'); //used for validation
const app = express();
app.use(express.json());

let obj = {
    us1 :"320",
    us2 :"195",
    temp :"29",
    humid :"70",
    infra :"0",
    bell :"0"

};

    
app.get('/', (req, res) => {
    res.send("Home page")
});

// app.get('/api/:id', (req, res) => {
//     obj.push(req.params.id);
//     res.send(obj);
// });
app.get('/api', (req, res) => { //esp reads
    res.send(obj);
});

// app.post('/api/set', (req, res) => {

//     obj = {
//         us1: parseInt(req.query.l1),
//     };
//     console.log(req.query);
//      res.send(obj);
// });

app.post('/api/set', (req, res) => {

    obj = {
        us1: req.body.us1,
        us2 :req.body.us2,
        temp :req.body.temp,
        humid :req.body.humid,
        infra :req.body.infra,
        bell :req.body.bell
    };
    console.log(req.body);
    res.send(obj);
});

//PORT ENVIRONMENT VARIABLE debug : heroku logs -t --app esp8266-api-testing
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));