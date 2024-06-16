const Sequelize = require('sequelize');
const database = require('./db');
const Professor = require('./Professor');
const Disciplina = require('./Disci');

const DisciplinaProfessor = database.define('disciplinaProfessor', {
    professorID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Professor,
            key: 'professorID'
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

module.exports = DisciplinaProfessor;
