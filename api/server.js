const express = require('express');
const server = express();

server.use(express.json());

const projectRouter = require('../api/project/router');
server.use('/api/projects', projectRouter);

server.get('/', (req, res) => {
    res.json({message: 'Hello Wordl'});
})

module.exports = server;