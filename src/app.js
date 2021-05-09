'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

const getProducts = router.get('/', (req,res,next)=>{
    res.status(200).send({
        tittle: 'Node Store API',
        version: '0.0.'
    });
});

const postProducts = router.post('/', (req,res,next)=>{
    res.status(201).json({"message":"Produto criado!"});
});

const putProducts = router.put('/:id', (req,res,next)=>{
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
});

const deleteProduct = router.delete('', (req, res, next)=>{
    res.status(200).json({"message":"Produto deletado"});
});

app.use('/', getProducts);
app.use('/products', postProducts);
app.use('/products', putProducts);
app.use('/products', deleteProduct);

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