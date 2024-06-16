const Sequelize = require('sequelize');
const database = require('./db');
const Departamento = require('./Depart');
const Curso = require('./Cursos');

const Aluno = database.define('Aluno', {
    alunoID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(350),
        allowNull: false
    },
    numero: {
        type: Sequelize.STRING(350),
        allowNull: true
    },
    cpf: {
        type: Sequelize.STRING(350),
        allowNull: false
    },
    rg: {
        type: Sequelize.STRING(350),
        allowNull: true
    },
    endereco_atual: {
        type: Sequelize.STRING(350),
        allowNull: true
    },
    telefone: {
        type: Sequelize.STRING(350),
        allowNull: true
    },
    endereco_permanente: {
        type: Sequelize.STRING(350),
        allowNull: true
    },
    email: {
        type: Sequelize.STRING(350),
        allowNull: true
    },
    data_nascimento: {
        type: Sequelize.DATE,
        allowNull: true
    },
    sexo: {
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

module.exports = Aluno;
