const { Livros } = require('../models');

const livrosService = {
    async novoLivro(nome, autor, valor) {
        return Livros.create({ nome, autor, valor });
    },

    async getLivros() {
        return Livros.findAll();
    },

    async getLivro(id) {
        const livro = await Livros.findByPk(id);
        if (!livro) 
            throw new Error('Livro não encontrado');
        else 
            return livro;
    },

    async alterarLivro(id, nome, autor, valor) {
        const livro = await Livros.findByPk(id);
        if (!livro) throw new Error('Livro não encontrado');
        livro.nome = nome;
        livro.autor = autor;
        livro.valor = valor;
        return livro.save();
    },

    async excluirLivro(id) {
        const livro = await Livros.findByPk(id);
        if (!livro) throw new Error('Livro não encontrado');
        return livro.destroy();
    }
    
};

module.exports = livrosService;