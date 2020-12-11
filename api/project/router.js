const express = require('express');

const router = express.Router();
const Projects = require('./model');

router.get('/', async (req, res) => {
    try {
        const data = await Projects.get(req.body);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message })

    }
})

router.post('/', async (req, res) => {
    try {
        const data = await Projects.insert(req.body);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message })

    }
});

module.exports = router;