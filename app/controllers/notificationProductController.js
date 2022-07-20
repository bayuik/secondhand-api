
const { NotificationsProducts } = require("../models");

const createNotificationProduct = async (req, res) => {
  const { product_name, price, category, user_id} = req.body;
  const image = req.file ? req.file.filename : "";
  const notificationProductCreate = await NotificationsProducts.create({
    product_name,
    price,
    category,
    product_photo: image,
    user_id
  })
  .then((NotificationsProducts) => {
    res.status(201).json({
      status: "create success",
      data: {
        NotificationsProducts,
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
    const notifications = await NotificationsProducts.findAll()
    .then((NotificationsProducts) => {
      res.status(201).json({
        status: "list success",
        data: {
          NotificationsProducts,
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
