const db = require('../../data/dbConfig');

module.exports = {
    get,
    insert
}

function get() {
    return db('resources');
}

function insert(post) {
    return db('resources')
    .insert(post)
}