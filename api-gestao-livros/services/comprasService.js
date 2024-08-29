// services/comprasService.js
const { Compras, Livros } = require('../models');

const comprasService = {

    async novaCompra(livroId, quantidade) {
        const livro = await Livros.findByPk(livroId);
        if (!livro) {
            throw new Error('Livro não encontrado');
        }

        const compra = await Compras.create({
            livroId,
            quantidade,
            dataCompra: new Date(),
        });

        return compra;
    },

    async getCompras() {
        return await Compras.findAll({ include: 'livro' });
    },

    async getCompra(id) {
        const compra = await Compras.findByPk(id, { include: 'livro' });
        if (!compra) {
            throw new Error('Compra não encontrada');
        }
        return compra;
    },

    async alterarCompra(id, quantidade) {
        const compra = await Compras.findByPk(id);
        if (!compra) {
            throw new Error('Compra não encontrada');
        }

        compra.quantidade = quantidade;
        await compra.save();

        return compra;
    },

    async excluirCompra(id) {
        const compra = await Compras.findByPk(id);
        if (!compra) {
            throw new Error('Compra não encontrada');
        }

        await compra.destroy();
    }

};

module.exports = comprasService;