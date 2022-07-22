const {
  DB_USERNAME = "dfbgkzqrsawfom",
  DB_PASSWORD = "4df4980670897eb9cbbbd6086ce5d668d79ef13f521c1446e0dcddc5a02aa681",
  DB_HOST = "ec2-3-222-74-92.compute-1.amazonaws.com",
  DB_NAME = "d5i2g2v5ksu4oj",
  DB_DIALECT = "postgres",
  DB_PORT = "5432",
} = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    dialect: DB_DIALECT,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    dialect: DB_DIALECT,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    dialect: DB_DIALECT,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};