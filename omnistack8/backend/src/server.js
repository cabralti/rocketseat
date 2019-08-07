// Import de dependencias
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

// Instanciando objeto
const server = express();

// Conexao com db
mongoose.connect('mongodb+srv://admin:admin@cluster0-giryq.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());

// Utilizando configuracoes de outro arquivo
server.use(routes);

// Definindo porta para servidor node.js
server.listen(3333);