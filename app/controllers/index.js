const { register, getUser, updateUser } = require("./usersController");
const { login, authorize } = require("./authController");
const {createTransactions} = require('./transactionController')
const { getProducts, createProducts, deleteProducts, getDetailProduct, updateProducts } = require("./productController");

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
  createTransactions
};
