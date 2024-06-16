const Sequelize = require('sequelize');
const database = require('./db');
const Departamento = require('./Depart');

const Curso = database.define('curso', {
    cursosID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(350),
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING(350),
        allowNull: true
    },
    numero: {
        type: Sequelize.STRING(350),
        allowNull: true
    },
    numero_semestres: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    carga_horaria_semestre: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    carga_horaria_total: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    nivel: {
        type: Sequelize.INTEGER,
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

module.exports = Curso;
