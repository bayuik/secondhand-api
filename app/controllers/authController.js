const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {Users} = require("../models");
const secretKey = process.env.SECRET_KEY || "This is a secret key";

const checkPassword = (encryptedPassword, password) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, encryptedPassword, (err, isValid) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(isValid);
    });
  });
};

const createToken = (payload) => jwt.sign(payload, secretKey, { expiresIn: "24h" });

const login = async (req, res) => {
  const user = await Users.findOne({where: {email: req.body.email}});

  if (!user) {
    res.status(404).json({
      message: "User not found",
    });
    return;
  }

  const isValid = await checkPassword(user.password, req.body.password);

  if (!isValid) {
    res.status(401).json({ message: "Invalid Password" });
    return;
  }

  const { id, name, email, password, city, address, phone, photo, role } = user;
  const token = createToken({
    id,
    name,
    email,
    password,
    city,
    address,
    phone,
    photo,
    role,
  });

  res.status(201).json({
    status: "success",
    data: {
      id,
      name,
      email,
      city,
      address,
      phone,
      photo,
      role,
    },
  });
};

const authorize = async (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization;
    let token = "";
    if (bearerToken && bearerToken.startsWith("Bearer")) {
      token = bearerToken.split(" ")[1];
    } else {
      token = bearerToken;
    }
    const tokenPayload = jwt.verify(token, secretKey);
    req.user = await users.find(tokenPayload.id);
    next();
  } catch (err) {
    res.status(401).json({
      status: "Unauthorized",
      message: err.message,
    });
  }
};

module.exports = { login, authorize };
