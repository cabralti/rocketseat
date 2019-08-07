// Imports
const { Schema, model } = require('mongoose'); // usando desestruturacao

// Definindo esquema
const DevSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    bio: String,
    avatar: {
        type: String,
        required: true
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }],
}, {
        timestamps: true // createdAt, updatedAt
    });

// Exportando modelo
module.exports = model('Dev', DevSchema);