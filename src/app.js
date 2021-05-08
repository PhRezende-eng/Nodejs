'use strict'

const express = require('express');

const app = express();
const router = express.Router();

const route = router.get('/', (req,res,next)=>{
    res.status(200).send({
        tittle: 'Node Store API',
        version: '0.0.'
    });
});

app.use('/homepage', route);

module.exports = app;