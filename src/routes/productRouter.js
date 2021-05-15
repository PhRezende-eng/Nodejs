'use strict'

const express = require('express');
const router = express.Router();

router.post('/', (req,res,next)=>{
    res.status(201).json({"message":"Produto criado!"});
});

router.put('/:id', (req,res,next)=>{
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
});

router.delete('/', (req, res, next)=>{
    res.status(200).json({"message":"Produto deletado"});
});

module.exports = router; 