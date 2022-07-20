const { NotifsProducts } = require("../models");

const createNotificationProduct = async (req, res) => {
  const { products_id, user_id} = req.body;
  const notificationProductCreate = await NotifsProducts.create({
    products_id,
    user_id
  })
  .then((NotifsProducts) => {
    res.status(201).json({
      status: "create success",
      data: {
        NotifsProducts,
      },
    });
  })
  .catch((err) => {
    res.status(500).json({
      status: "error",
      message: err,
    });
  });
};

const getNotificationProducts = async (req, res) => {
    const notifications = await NotifsProducts.findAll()
    .then((NotifsProducts) => {
      res.status(201).json({
        status: "list success",
        data: {
          NotifsProducts,
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
    createNotificationProduct,
    getNotificationProducts,
};
