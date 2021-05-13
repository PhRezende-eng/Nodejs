'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const indexRoute = require('./routes/indexRouter');
const productRoute = require('./routes/productRouter')

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;

// STATUS
// 200 - OK
// 201 - CREATED
// 400 - error.BADREQUEST
// 401 - !AUTHENTICATED
// 403 - !ACCESS
// 500 - INTERNAL-SERVER-ERROR


//VERBO HTTP
// GET - OBTER INFORMAÇÃO
// POST - CRIAR INFORMAÇÃO
// PUT - ATUALIZAR INFORMAÇÃO
// DELETE - DELETAR INFORMAÇÃO