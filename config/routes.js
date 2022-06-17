const express = require("express");
const router = express.Router();
const { register, login, getUser, updateUser, getProducts, createProducts, deleteProducts, getDetailProduct, updateProducts } = require("../app/controllers");
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
router.route("/profile/:id")
  .get(getUser)
  .put( upload.single("photo"), updateUser)
router.get("/product", getProducts);
router.post("/product", upload.single("product_photo"), createProducts);
router.route("/product")
  .get(getProducts)
  .post(upload.single("product_photo"), createProducts);
router.route("/product/:id")
  .get(getDetailProduct)
  .put(upload.single("product_photo"), updateProducts)
  .delete(deleteProducts);

module.exports = router;
