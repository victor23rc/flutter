const Sequelize = require('sequelize');
const database = require('./db');
const Departamento = require('./Depart');

const Professor = database.define('professor', {
    professorID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(350),
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING(350),
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING(350),
        allowNull: true
    },
    departamentoID: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: Departamento,
            key: 'departamentoID'
        }
    }
});

module.exports = Professor;
