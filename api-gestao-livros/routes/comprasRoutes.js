const express = require('express');
const comprasService = require('../services/comprasService');
const authenticateToken = require('../middleware/auth');
const router = express.Router();

router.post('/nova', authenticateToken, async (req, res) => {
    const { livroId, quantidade } = req.body;

    try {
        const compra = await comprasService.novaCompra(livroId, quantidade);
        res.status(201).json(compra);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar a compra!', error: error.message });
    }
});

router.get('/', authenticateToken, async (req, res) => {
    try {
        const compras = await comprasService.getCompras();
        res.json(compras);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao retornar os registros de compras!' });
    }
});

router.get('/editar/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    try {
        const compra = await comprasService.getCompra(id);
        res.json(compra);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao retornar o registro da compra!' });
    }
});

router.put('/editar/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    const { quantidade } = req.body;

    try {
        const compra = await comprasService.alterarCompra(id, quantidade);
        res.json(compra);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/excluir/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;

    try {
        await comprasService.excluirCompra(id);
        res.json({ message: 'Compra excluída com sucesso!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
