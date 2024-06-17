const Sequelize = require('sequelize');
const database = require('./db');

const Departamento = database.define('departamento', {
    departamentoID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(350),
        allowNull: false
    },
    sigla: {
        type: Sequelize.STRING(350),
        allowNull: true
    },
    codigo: {
        type: Sequelize.STRING(350),
        allowNull: true
    },
    endereco: {
        type: Sequelize.STRING(350),
        allowNull: true
    },
    telefone: {
        type: Sequelize.STRING(350),
        allowNull: true
    }
});

module.exports = Departamento;
