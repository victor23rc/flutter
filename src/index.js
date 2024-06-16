///  Victor Campos - Backend Projeto FINAL 

/// Exports

require('dotenv').config() ///
const bcrypt = require('bcrypt') /// incriptação
const jwt = require('jsonwebtoken'); /// jwt
const  Sequelize = require('sequelize'); /// migração do banco
const express = require('express'); /// servidor

/// conexão com o banco

const database = require('./models/db'); 

//// tabelas do banco

const Depart = require('./models/Depart'); /// cria a tabela Departamento
const Profe = require('./models/Professor'); /// cria a tabela prof
const Curso = require('./models/Cursos'); /// cria a tabela Cursos
const Aluno = require('./models/Aluno'); /// cria a tabela Aluno
const Disci = require('./models/Disci'); /// cria a tabela Disciplina
const DisciProf = require('./models/discProf'); /// cria a tabela DisciplinaProfessor
const Matr = require('./models/Matri'); /// cria a tabela Matricula


const app = express()
app.use(express.json())

const port = 3001;

// Rota de teste para verificar se o servidor está online
app.get('/Teste', (req, res) => {
    res.send('Onlineeee');
});

// Importação das rotas
const professorRoutes = require('./routes/professorRoutes');
const departamentoRoutes = require('./routes/departamentoRoutes');

// Uso das rotas
app.use('/professores', professorRoutes);
app.use('/departamentos', departamentoRoutes);



// Inicializa o banco de dados e inicia o servidor
(async () => {
    try {
        await database.sync();
        app.listen(port, () => {
            console.log('Servidor conectado');
        });
    } catch (error) {
        console.error('Erro ao iniciar o servidor:', error);
    }
})();