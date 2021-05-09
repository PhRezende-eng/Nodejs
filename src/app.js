'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const getProducts = router.get('/', (req,res,next)=>{
    res.status(200).send({
        tittle: 'Node Store API',
        version: '0.0.'
    });
});

const createProducts = router.post('/', (req,res,next)=>{
    res.status(201).send(req.body);
});

app.use('/', getProducts);
app.use('/products', createProducts);


module.exports = app;


// STATUS
// 200 - OK
// 201 - CREATED
// 400 - error.BADREQUEST
// 401 - !AUTHENTICATED
// 403 - !ACCESS
// 500 - INTERNAL-SERVER-ERROR