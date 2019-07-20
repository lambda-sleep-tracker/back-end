module.exports = {
  development: {
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

  production: {
    client: 'sqlite3',
    debug: true,
    connection: {
      filename: './data/sleep-tracker.sqlite3'
    },
    migrations: {
      directory: './data/migrations',
    },

    ssl: true
  },
}
