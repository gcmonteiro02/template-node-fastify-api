import Knex from 'knex'

let knexConfig = {}
if (process.env.NODE_ENV == 'test') {
  knexConfig = {
    client: 'sqlite3',
    connection: ':memory:',
    useNullAsDefault: true,
  }
} else {
  knexConfig = {
    client: process.env.DATABASE_DIALECT,
    connection: {
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_DATABASE,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      port: process.env.DATABASE_PORT,
    },
    pool: {
      min: Number(process.env.DATABASE_POOL_MIN),
      max: Number(process.env.DATABASE_POOL_MAX),
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  }
}

const knex = Knex(knexConfig)

export default knex
