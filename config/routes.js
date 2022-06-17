const express = require("express");
const router = express.Router();
const {getProducts, createProducts, deleteProducts, getDetaiProduct, updateProducts} = require('../app/controllers')


const mul = require('multer');

const storage = mul.diskStorage({
    destination: function(req, file, cb){
        cb(null, './images');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = mul({storage: storage})


router.get("/product", getProducts);
router.post("/product", upload.single('product_photo'),createProducts);
router.delete("/productDelete/:id", deleteProducts);
router.get("/product/:id", getDetaiProduct);
router.put("/productEdit", upload.single('product_photo'),updateProducts)
module.exports = router;