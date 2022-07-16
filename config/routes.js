const express = require("express");
const router = express.Router();
const { register, login, getUser, updateUser, getProducts, createProducts, deleteProducts, getDetailProduct, updateProducts, createTransactions, getUserProducts, getUserTransactions } = require("../app/controllers");
const multer = require("multer");
const { Deta } = require("deta");
const deta = Deta("c0x1nrki_LhQt95CaBmmsQ31B6TJJbWr8KdHww6yp");
const drive = deta.Drive("c0x1nrki");

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
router.route("/history/:userId").get(getUserTransactions);
router.get("/download/:name", downloadImage);

module.exports = router;
