// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host:'containers-us-west-167.railway.app',
      port:'6365',
            database: 'postgres',
            user:     'postgres',
            password: 'R7QOVTuZcG315wtNhVNh'
    },
useNullAsDefaul:true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host:'containers-us-west-167.railway.app',
port:'6365',
      database: 'postgres',
      user:     'postgres',
      password: 'R7QOVTuZcG315wtNhVNh'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
