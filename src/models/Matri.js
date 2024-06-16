const Sequelize = require('sequelize');
const database = require('./db');
const Aluno = require('./Aluno');
const Disciplina = require('./Disci');

const Matricula = database.define('Matriculas', {
    matriculaID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nota_final: {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    presencas: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    faltas: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    alunoID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Aluno,
            key: 'alunoID'
        }
    },
    disciplinaID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Disciplina,
            key: 'disciplinaID'
        }
    }
});

module.exports = Matricula;
