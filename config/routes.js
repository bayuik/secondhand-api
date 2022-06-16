const express = require("express");
const router = express.Router();
const { rolePost, userPost, getImages, login } = require("../app/controllers");

router.get("/login", login);

router.post("/rolePost", rolePost);
router.post("/userPost", userPost);

router.get("/images/:file", getImages);

module.exports = router;