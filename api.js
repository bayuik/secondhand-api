const express       = require('express');
const path          = require("path");
const fs            = require("fs");
const cors        = require('cors');
require('dotenv').config();
var bodyParser    = require('body-parser')
const app         = express();
// parse application/json
app.use(bodyParser.json())
var rolePost         = require('./app/controller/rolePost');
var userPost         = require('./app/controller/userPost');
app.use(express.json());
app.use(cors());

app.post('/rolePost',rolePost)
app.post('/userPost',userPost)


app.get('/images/:file', (req, res) => {
  var file        = req.params.file;
  var extname     = path.extname(file);
  var targetfile = path.join(images, file);
  fs.readFile(targetfile, function(error, content) {
      res.writeHead(200, { 'Content-Type': fileType(extname.replace(".", "")) });
      res.end(content, 'utf-8');
  });
})
app.listen(process.env.PORT_API, () => {
  console.log(`Example app listening on port ${process.env.PORT_API}`)
})