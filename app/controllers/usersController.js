const { Users } = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const encryptPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, (err, encryptedPassword) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(encryptedPassword);
    });
  });
};

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const encryptedPassword = await encryptPassword(password);
  const role = "buyer";
  const newUsers = {
    role,
    name,
    email,
    password: encryptedPassword,
  };

  Users.create(newUsers)
    .then((Users) => {
      res.status(201).json({
        status: "success",
        data: Users,
      });
    })
    .catch((err) => {
      res.status(422).json({
        status: "error",
        message: err.message,
      });
    });
};

module.exports = {
  register,
};
