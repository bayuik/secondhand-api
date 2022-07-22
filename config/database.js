const {
  DB_USERNAME = "auhirraabthxnr",
  DB_PASSWORD = "2c490548120d47eb6d89be15aade9962b1cb7385fe5d48b91711bf6611bbdef0",
  DB_HOST = "ec2-54-86-224-85.compute-1.amazonaws.com",
  DB_NAME = "dqf1h0krnuc26",
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