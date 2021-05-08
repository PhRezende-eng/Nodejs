'use strict'

const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');
const { normalize } = require('path');


const app = express();
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);
const router = express.Router();

const route = router.get('/', (req,res,next)=>{
    res.status(200).send({
        tittle: 'Node Store API',
        version: '0.0.'
    });
});

app.use('/pagehome', route);

server.listen(port);
console.log('API rodando na porta ' + port)