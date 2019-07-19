module.exports = {
  production: {
    client: 'sqlite3',
    connection: {
      filename: './data/sleep-tracker.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
}
