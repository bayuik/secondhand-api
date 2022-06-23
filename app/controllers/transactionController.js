const { Transaction } = require("../models");

const createTransactions = async (req,res) => {
	let {harga_tawar, products_id, user_id} = req.body;
	const transactionCreate = await Transaction.create({
		harga_tawar,
		products_id,
		user_id
	}).then(Transactions => {
		return Transactions
	})
	res.status(201).json({
		status: "create success",
		data: {
			transactionCreate
		},
	});

};

module.exports = {
    createTransactions
  };