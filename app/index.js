const express = require("express");
const bodyParser = require("body-parser");
const router = require("../config/routes");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);

module.exports = app;
