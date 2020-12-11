const express = require('express');

const router = express.Router();
const Projects = require('./model');

router.get('/', async (req, res) => {
    try {
        const getProjects = await Projects.get(req.body);
        res.json(getProjects);
    } catch (error) {
        res.json(error.message);
    }
})

module.exports = router;