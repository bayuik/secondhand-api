const express = require("express");
const router = express.Router();
const { rolePost, userPost, getImages } = require("../app/controllers");

router.get("/login", (req, res) => {
  res.send("login");
});

router.post("/rolePost", rolePost);
router.post("/userPost", userPost);

router.get("/images/:file", getImages);

module.exports = router;
