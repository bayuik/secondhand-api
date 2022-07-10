const { register, getUser, updateUser } = require("./usersController");
const { login, authorize } = require("./authController");
const { createTransactions, getUserTransactions } = require("./transactionController");
const { getProducts, createProducts, deleteProducts, getDetailProduct, updateProducts, getUserProducts } = require("./productController");

module.exports = {
  register,
  login,
  authorize,
  getUser,
  updateUser,
  getProducts,
  createProducts,
  deleteProducts,
  getDetailProduct,
  updateProducts,
  createTransactions,
  getUserProducts,
  getUserTransactions,
};
