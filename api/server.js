const express = require('express');
const server = express();

server.use(express.json());

const projectRouter = require('../api/project/router');
const resourceRouter = require('../api/resource/router');
const taskRouter = require('../api/task/router');
server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

server.get('/', (req, res) => {
    res.json({message: 'Hello Wordl'});
})

module.exports = server;