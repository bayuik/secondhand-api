const express = require("express");
const router = express.Router();
const { register, login, getUser, updateUser, getProducts, createProducts, deleteProducts, getDetailProduct, updateProducts, createTransactions, getUserProducts } = require("../app/controllers");
const multer = require("multer");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + ".jpg");
  },
});

const upload = multer({ storage: storage });

router.post("/login", login);
router.post("/register", register);
router.route("/profile/:id").get(getUser).put(upload.single("photo"), updateUser);
router.route("/product").get(getProducts).post(upload.single("product_photo"), createProducts);
router.route("/product/:id").get(getDetailProduct).put(upload.single("product_photo"), updateProducts).delete(deleteProducts);
router.post("/transaction", createTransactions);
router.get("/my-products/:userId", getUserProducts);

module.exports = router;
