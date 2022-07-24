const { Transaction } = require("../models");

const createTransactions = async (req, res) => {
  const { harga_tawar, products_id, user_id, status, product_owner } = req.body;
  const transactionCreate = await Transaction.create({
    harga_tawar,
    products_id,
    user_id,
    status,
    product_owner,
  })
    .then((Transactions) => {
      res.status(201).json({
        message: "Transactions created successfully",
        Transactions,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error",
        error: err,
      });
    });
};

const getUserTransactions = async (req, res) => {
  let { user_id } = req.params;
  const userTransactions = await Transaction.findAll({
    where: user_id,
    order: [["createdAt", "DESC"]],
    limit: 4,
  })
    .then((Transactions) => {
      res.status(201).json({
        status: "list success",
        data: {
          Transactions,
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

const confirmTransaction = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const transaction = await Transaction.findOne({
    where: {
      id,
    },
  })
    .then((Transactions) => {
      Transactions.update({
        status,
      });

      res.status(200).json({
        message: "Transaction updated successfully",
        Transactions,
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
  createTransactions,
  getUserTransactions,
  confirmTransaction,
};
