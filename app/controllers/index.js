const { register, getUser, updateUser } = require("./usersController");
const { login, authorize } = require("./authController");

module.exports = {
  register,
  login,
  authorize,
  getUser,
  updateUser,
};
