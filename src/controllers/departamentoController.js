const Depart = require('../models/Depart');

module.exports = {
    register: async (req, res) => {
        const { nome, sigla, codigo, endereco, telefone } = req.body;

        if (!nome) {
            return res.status(422).json({ msg: "Campo nome obrigatório" });
        }

        try {
            const newDepart = await Depart.create({
                nome,
                sigla,
                codigo,
                endereco,
                telefone
            });
            return res.status(201).json({ id: newDepart.departamentoID, msg: "Departamento cadastrado" });
        } catch (error) {
            console.error("Erro ao criar o departamento:", error);
            return res.status(500).json({ msg: "Erro interno do servidor" });
        }
    }
};
