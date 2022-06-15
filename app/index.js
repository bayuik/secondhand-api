const express = require("express");
const bodyParser = require("body-parser");
const router = require("../config/routes");
const cors = require("cors");
const fs = require("fs");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);

module.exports = app;