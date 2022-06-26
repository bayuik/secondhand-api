const { Products } = require("../models");
const fs = require("fs");

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

const getProducts = async (req, res) => {
  const products = await Products.findAll();
  res.status(201).json({
    status: "list success",
    data: {
      products,
    },
  });
};

const createProducts = async (req, res) => {
  let { product_name, price, category, description, user_id } = req.body;
  const image = req.file ? req.file.filename : "";
  const productCreate = await Products.create({
    product_name,
    price,
    category,
    description,
    product_photo: image,
    user_id
  }).then((Products) => {
    return Products;
  });
  res.status(201).json({
    status: "create success",
    data: {
      productCreate,
    },
  });
};

const deleteProducts = async (req, res) => {
  let { id } = req.params;
  const productDelete = await Products.destroy({
    where: {
      id: id,
    },
  }).then((Products) => {
    return Products;
  });
  res.status(201).json({
    status: "delete success",
    data: {
      productDelete,
    },
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
  const products = await Products.findOne({ where: { id: id } });
  res.status(201).json({
    status: "Success",
    data: {
      products,
    },
  });
};

module.exports = {
  getProducts,
  createProducts,
  deleteProducts,
  updateProducts,
  getDetailProduct,
};
