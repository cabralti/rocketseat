// Imports
const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {

    async index(req, res) {
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);

        const users = await Dev.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggedDev.likes } },
                { _id: { $nin: loggedDev.dislikes } },
            ]
        });

        return res.json(users);
    },

    // create devs
    async store(req, res) {
        const { username } = req.body; // desestruturacao

        // Verificando se ja existe na base de dados
        const userExists = await Dev.findOne({ user: username });
        if (userExists) {
            return res.json(userExists);
        }

        // consumindo api github
        const response = await axios.get(`https://api.github.com/users/${username}`);

        const { name, bio, avatar_url: avatar } = response.data;

        // criando um novo dev
        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        });

        return res.json(dev);
    }
}