const { rolePost, userPost, getImages } = require("./usersController");
const { login, authorize } = require("./authController");

module.exports = {
  rolePost,
  userPost,
  getImages,
  login,
  authorize,
};
