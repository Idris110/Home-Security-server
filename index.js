const express = require('express');
// const fetch = require('node-fetch');
// const Joi = require('joi'); //used for validation
const app = express();
app.use(express.json());

let obj = {
    us1 :"0"
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
        us1: req.body.light1,
        // light2: req.body.light2,
        // fan1: req.body.fan1,
        // servo: req.body.ser
    };
    console.log(req.body);
    res.send(obj);
});

//PORT ENVIRONMENT VARIABLE debug : heroku logs -t --app esp8266-api-testing
const port = process.env.PORT || 80;
app.listen(port, () => console.log(`Listening on port ${port}..`));