const { Users } = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const fs = require("fs");
const path = require("path");
const { Deta } = require("deta");
const deta = Deta("c0x1nrki_LhQt95CaBmmsQ31B6TJJbWr8KdHww6yp");
const drive = deta.Drive("c0x1nrki");

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

const deleteImage = async (id) => {
  const user = await Users.findOne({
    where: {
      id: id,
    },
  });

  const image = user.photo;
  fs.unlink(`uploads/${image}`, (err) => {
    if (err) {
      return err;
    }
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
      const { id, role, name, email } = Users;
      res.status(201).json({
        status: "success",
        data: {
          id,
          role,
          name,
          email,
        },
      });
    })
    .catch((err) => {
      res.status(422).json({
        status: "error",
        message: err.message,
      });
    });
};

const getUser = (req, res) => {
  Users.findByPk(req.params.id)
    .then((user) => {
      res.status(200).json({
        status: "success",
        data: user,
      });
    })
    .catch((err) => {
      res.status(422).json({
        status: "error",
        message: err.message,
      });
    });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  if (req.file) await deleteImage(id);
  const { name, city, address, phone } = req.body;
  const image = req.file ? req.file.filename : Date.now();
  const contents = `${path.join(__dirname, "../../uploads")}/${image}`;
  const img = await drive.put(image, { path: contents });
  const updateUser = {
    name,
    city,
    address,
    phone,
    photo: image,
  };

  Users.update(updateUser, {
    where: { id },
  })
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "User updated successfully",
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
  getUser,
  updateUser,
};