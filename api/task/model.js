// build your `Task` model here
const db = require('../../data/dbConfig');

module.exports = {
    get,
    insert
}

function get() {
    return db('projects');
}

function insert(post) {
    return db('projects')
    .insert(post)
}