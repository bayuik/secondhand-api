const { register } = require("./usersController");
const { login, authorize } = require("./authController");

module.exports = {
  register,
  login,
  authorize,
};
