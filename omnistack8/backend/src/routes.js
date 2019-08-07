// Import de dependencias
const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

// Instanciando objeto
const routes = express.Router();

// Definindo rotas
routes.get('/', (req, res) => {
    return res.json({ message: `Hello ${req.query.name}` });
});

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

// Exportando objeto
module.exports = routes;