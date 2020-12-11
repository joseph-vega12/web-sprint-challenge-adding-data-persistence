const express = require('express');

const router = express.Router();
const Task = require('./model');

router.get('/', async (req, res) => {
    try {
        const data = await Task.get(req.body);
        res.json(data);
    } catch (error) {
        res.json(error.message);
    }
})

router.post('/', async (req, res) => {
    try {
        const data = await Task.insert(req.body);
        res.json(data);
    } catch (error) {
        res.json(error.message);
    }
});

module.exports = router;