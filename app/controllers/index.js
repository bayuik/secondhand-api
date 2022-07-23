const { register, getUser, updateUser } = require("./usersController");
const { login, authorize } = require("./authController");
const { createTransactions, getUserTransactions } = require("./transactionController");
const { getProducts, createProducts, deleteProducts, getDetailProduct, updateProducts, getUserProducts, downloadImage } = require("./productController");
const {getNotificationProducts, createNotificationProduct} = require('./notificationProductController')
const {getNotificationTransactions, createNotificationTransactions} = require('./notificationTransactionController')
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
  getNotificationProducts,
  createNotificationProduct,
  getNotificationTransactions,
  createNotificationTransactions,
  downloadImage
};
