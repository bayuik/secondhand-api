const express = require("express");
const bodyParser = require("body-parser");
const router = require("../config/routes");
const cors = require("cors");
const fs = require("fs");
const app = express();
require('dotenv').config();
// parse application/json
app.use(bodyParser.json())
app.use(express.json());
app.use(cors());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);
app.use("/uploads",express.static('uploads'))
module.exports = app;
