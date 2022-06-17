const express = require("express");
const router = express.Router();
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
const { register, login, getUser, updateUser } = require("../app/controllers");

router.post("/login", login);
router.post("/register", register);
router.put("/profile/:id", upload.single("photo"), updateUser);
router.get("/profile/:id", getUser);

module.exports = router;
