const { Products } = require("../models");
const fs = require("fs");
const path = require("path");
const { Deta } = require("deta");
const deta = Deta("c0x1nrki_LhQt95CaBmmsQ31B6TJJbWr8KdHww6yp");
const drive = deta.Drive("c0x1nrki");
const base64Img = require("base64-img");

const deleteImage = async (id) => {
  const product = await Products.findOne({
    where: {
      id: id,
    },
  });

  const image = product.product_photo;
  fs.unlink(`uploads/${image}`, (err) => {
    if (err) {
      return err;
    }
  });
};

const countUserProduct = async (userId) => {
  const countProduct = await Products.count({
    where: {
      user_id: parseInt(userId),
    },
  });

  if (countProduct >= 4) return false;
  return true;
};

const createProducts = async (req, res) => {
  let { product_name, price, category, description, user_id } = req.body;
  const isMoreThanFour = await countUserProduct(user_id);
  if (!isMoreThanFour) {
    res.status(422).json({
      status: "error",
      message: "You can only upload 4 products",
    });
    return;
  }

  const image = req.file ? req.file.filename : "";
  const contents = `${path.join(__dirname, "../../uploads")}/${image}`;
  const img = await drive.put(image, { path: contents });

  const productCreate = await Products.create({
    product_name,
    price,
    category,
    description,
    product_photo: image,
    user_id,
  })
    .then((Products) => {
      res.status(201).json({
        status: "create success",
        data: {
          Products,
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

const getProducts = async (req, res) => {
  const products = await Products.findAll()
    .then((Products) => {
      res.status(201).json({
        status: "list success",
        data: {
          Products,
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

const deleteProducts = async (req, res) => {
  let { id } = req.params;
  const productDelete = await Products.destroy({
    where: {
      id: id,
    },
  })
    .then((Products) => {
      res.status(201).json({
        status: "delete success",
        data: {
          Products,
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

const updateProducts = async (req, res) => {
  const { id } = req.params;
  if (req.file) await deleteImage(id);
  let { product_name, price, category, description } = req.body;
  const image = req.file ? req.file.filename : "";
  const updateProduct = await Products.update(
    {
      product_name,
      price,
      category,
      description,
      product_photo: image,
    },
    {
      where: {
        id: id,
      },
    }
  )
    .then((Products) => {
      res.status(201).json({
        status: "Success",
        message: "Product Update Successfully",
      });
    })
    .catch((err) => {
      res.status(422).json({
        status: "error",
        message: err.message,
      });
    });
};

const getDetailProduct = async (req, res) => {
  let { id } = req.params;

  const products = await Products.findOne({ where: { id: id } })
    .then((Products) => {
      res.status(201).json({
        status: "Success",
        data: {
          Products,
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

const getUserProducts = async (req, res) => {
  let { userId } = req.params;
  const products = await Products.findAll({
    where: {
      user_id: parseInt(userId),
    },
  })
    .then((Products) => {
      res.status(201).json({
        status: "Success",
        data: {
          Products,
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

module.exports = {
  getProducts,
  createProducts,
  deleteProducts,
  updateProducts,
  getDetailProduct,
  getUserProducts,
};
