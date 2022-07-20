const { NotificationsTransactions } = require("../models");

const createNotificationTransactions = async (req, res) => {
  const { harga_tawar, products_id, user_id } = req.body;
  const transactionCreate = await NotificationsTransactions.create({
    harga_tawar,
    products_id,
    user_id,
  })
    .then((NotificationsTransactions) => {
      res.status(201).json({
        message: "Transactions created successfully",
        NotificationsTransactions,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error",
        error: err,
      });
    });
};

const getNotificationTransactions = async (req, res) => {
  const notifications = await NotificationsTransactions.findAll()
  .then((NotificationsTransactions) => {
    res.status(201).json({
      status: "list success",
      data: {
        NotificationsTransactions,
      },
    });
  })
  .catch((err) => {
    res.status(422).json({
      status: "error",
      message: err,
    });
  });
};

module.exports = {
  createNotificationTransactions,
  getNotificationTransactions,
};
