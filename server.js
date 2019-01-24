'use strict'

const express = require('express');
const app = express();
const mySqlConnect = require('./src/models/index');
const bodyParser = require('body-parser');
const baseRouter = require('./src/router/index')

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

mySqlConnect.connect((err) => {
    if (err) {
        console.log("ravi", err);
    }
    else {
        console.log("run");
    }
})

const Logger = require('./src/logger')

const logger = new Logger();

app.get('/', (req, res) => {
    logger.log(res);
})
logger.on('emitMessage', (data,res) => {
    console.log(data);
    res.send(data);
})

app.use('/v1/data', baseRouter);

///first branch

app.listen(3000, () => {
    console.log("3000");
});
//first brranch  