const {
  DB_USERNAME = "pgrevvpedwtxuy",
  DB_PASSWORD = "8a78817cefc077d46f4b3d6d7e3408fc97a143e028887d31711db3ae69c23c5b",
  DB_HOST = "ec2-54-158-247-210.compute-1.amazonaws.com",
  DB_NAME = "d92nie6j3rpima",
  DB_DIALECT = "postgres",
  DB_PORT = "5432",
  DB_SSL = {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
} = process.env;


module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: DB_DIALECT,
    dialectOptions: DB_SSL,
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: DB_DIALECT,
    dialectOptions: DB_SSL,
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: DB_DIALECT,
    dialectOptions: DB_SSL,
  },
};
