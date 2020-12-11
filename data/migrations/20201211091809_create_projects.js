

exports.up = function(knex) {
    return knex.schema
    .createTable('projects', table => {
        table.increments('projects_id')
        table.string('name', 128).notNullable()
        table.string('description', 128).notNullable()
        table.boolean('completed').notNullable().defaultTo(false);
    })
    .createTable('resources', table => {
        table.increments('resources_id')
        table.string('name', 128).unique().notNullable()
        table.string('description', 126);
        table.integer('projects_id')
        .unsigned()
        .references('projects_id').inTable('projects')
        .onDelete('RESTRICT').onUpdate('RESTRICT')
    })
    .createTable('tasks', table => {
        table.increments()
        table.string('description', 128).notNullable()
        table.string('notes', 128)
        table.boolean('completed').notNullable().defaultTo(false)
        table.integer('projects_id')
        .unsigned()
        .references('projects_id').inTable('projects')
        .onDelete('RESTRICT').onUpdate('RESTRICT')
        table.integer('resources_id')
        .unsigned()
        .references('resources_id').inTable('resources')
        .onDelete('RESTRICT').onUpdate('RESTRICT')
    })
};

exports.down = function(knex) {
    return knex.schema 
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};


