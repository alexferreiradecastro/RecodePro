const { Schema, model } = require('mongoose')

const ContatoSchema = new Schema({
    nome: {
        type: String,
    },
    mensagem: {
        type: String,
    },
    data_registro: {
        type: Date,
        default: new Date()
    }
});

const modelo = model('messagem', ContatoSchema);

module.exports = modelo;