const Profe = require('../models/Professor');

module.exports = {
    register: async (req, res) => {
        const { nome, cpf, endereco, departamentoID } = req.body;

        if (!nome) {
            return res.status(422).json({ msg: "Campo Nome obrigatório" });
        }

        if (!cpf) {
            return res.status(422).json({ msg: "Campo CPF obrigatório" });
        }

        if (!endereco) {
            return res.status(422).json({ msg: "Campo Endereço obrigatório" });
        }

        if (!departamentoID) {
            return res.status(422).json({ msg: "Campo ID do departamento obrigatório" });
        }

        const userExists = await Profe.findOne({ where: { cpf } });

        if (userExists) {
            return res.status(422).json({ msg: "Professor já cadastrado!" });
        }

        const user = new Profe({
            nome,
            cpf,
            endereco,
            departamentoID,
        });

        try {
            await user.save();
            return res.status(201).json({ msg: "Professor cadastrado com sucesso" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: 'Erro no servidor, tente novamente mais tarde!' });
        }
    },

    getAll: async (req, res) => {
        try {
            const professores = await Profe.findAll();
            res.status(200).json(professores);
        } catch (error) {
            console.error('Erro ao buscar os professores:', error);
            res.status(500).json({ msg: 'Erro interno do servidor' });
        }
    }
};
