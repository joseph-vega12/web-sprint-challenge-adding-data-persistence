module.exports = {
  development: {
    // complete your knexfile
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/projects.db3'
    },
    migrations: {
      directory: "./data/migrations",
    },
  },
};
