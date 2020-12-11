const express = require('express');

const router = express.Router();
const Resources = require('./model');

router.get('/', async (req, res) => {
    try {
        const data = await Resources.get(req.body);
        res.json(data);
    } catch (error) {
        res.json(error.message);
    }
})

router.post('/', async (req, res) => {
    try {
        const data = await Resources.insert(req.body);
        res.json(data);
    } catch (error) {
        res.json(error.message);
    }
});

module.exports = router;