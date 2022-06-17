const { Products } = require("../models");

const getProducts = async (req, res) => {
	const products = await Products.findAll();
	res.status(201).json({
		status: "list success",
		data: {
			products
		},
	  });
};

const createProducts = async (req,res) => {
	console.log(req.file)
	let {product_name, price, category, description} = req.body;
	const productCreate = await Products.create({
		product_name: product_name,
		price: price,
		category: category,
		description: description,
		product_photo: req.file.path
	}).then(Products => {
		return Products
	})
	res.status(201).json({
		status: "create success",
		data: {
			productCreate
		},
	});

};

const deleteProducts = async (req,res) => {
	let {id} = req.params;
	const productDelete = await Products.destroy({
		where: {
		  id: id
		}
	  }).then(Products => {
		return Products
	})
	res.status(201).json({
		status: "delete success",
		data: {
			productDelete
		},
	});
}

const updateProducts = async (req,res) => {
	console.log(req.file)
	let {id, product_name, price, category, description} = req.body;
	const productCreate = await Products.update({
		product_name: product_name,
		price: price,
		category: category,
		description: description,
		product_photo: req.file.path
	},{
		where:{
			id: id
		}
	}).then(Products => {
		return Products
	})
	res.status(201).json({
		status: "update success",
		data: {
			productCreate
		},
	});

};

const getDetaiProduct = async(req,res) => {
	let {id} = req.params;
	const products = await Products.findOne({where:{id:id}});
	res.status(201).json({
		status: "list one product success",
		data: {
			products
		},
	  });
}

module.exports = {
  getProducts,
  createProducts,
  deleteProducts,
  updateProducts,
  getDetaiProduct
};
