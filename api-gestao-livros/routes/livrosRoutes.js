const express = require('express');
const livrosService = require('../services/livrosService');
const authenticateToken = require('../middleware/auth');
const router = express.Router();

router.post('/novo', authenticateToken, async (req, res) => {
    const { nome, autor, valor } = req.body;

    try {
        const livro = await livrosService.novoLivro(nome, autor, valor);
        res.status(201).json(livro);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar o livro!' });
    }
});

router.get('/', authenticateToken, async (req, res) => {
    try {
        const livros = await livrosService.getLivros();
        res.json(livros);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao retornar os registros dos livros!' });
    }
});

router.get('/editar/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    try {
        const livro = await livrosService.getLivro(id);
        res.json(livro);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao retornar o registro do livro!' });
    }
});

router.put('/editar/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    const { nome, autor, valor } = req.body;

    try {
        const livro = await livrosService.alterarLivro(id, nome, autor, valor);
        res.json(livro);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/excluir/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;

    try {
        await livrosService.excluirLivro(id);
        res.json({ message: 'Livro excluído com sucesso!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

