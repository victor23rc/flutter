const Sequelize = require('sequelize');
const database = require('./db');
const Curso = require('./Cursos');

const Disciplina = database.define('Disciplina', {
    disciplinaID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    codigo: {
        type: Sequelize.STRING(350),
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING(350),
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING(350),
        allowNull: false
    },
    carga_horaria: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    cursosID: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: Curso,
            key: 'cursosID'
        }
    }
});

module.exports = Disciplina;
