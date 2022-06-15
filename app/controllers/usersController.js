var multiparty = require("multiparty");
const randomstring = require("randomstring");
const path = require("path");
const fs = require("fs");
const { Users, Role } = require("../models");

async function userPost(req, res) {
  console.log("req body", req.body);
  var form = new multiparty.Form();
  form.parse(req, async function (err, fields, files) {
    var ext = path.extname(files.photo[0].originalFilename);
    var objExt = ext.split(".");
    var filename = randomstring.generate(6);
    var readerStream = fs.createReadStream(files.photo[0].path);
    var dest_file = path.join(process.env.IMAGES_DIRECTORY, filename + "." + objExt[objExt.length - 1]);
    var writerStream = fs.createWriteStream(dest_file);
    readerStream.pipe(writerStream);
    var userCreate = await Users.create({
      name: fields.name[0],
      email: fields.email[0],
      password: fields.password[0],
      city: fields.city[0],
      address: fields.address[0],
      phone: fields.phone[0],
      role_id: fields.role_id[0],
      photo: filename + "." + objExt[objExt.length - 1],
    }).then((Users) => {
      return Users;
    });
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({ message: "Success", display_message: "Create Success ", data: userCreate }));
  });
}

async function rolePost(req, res) {
  console.log("req body", req.query);
  var roleCreate = await Role.create({
    role: req.query.role,
  }).then((Role) => {
    return Role;
  });
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(JSON.stringify({ message: "Success", display_message: "Create Success ", data: roleCreate }));
}

const getImages = (req, res) => {
  var file = req.params.file;
  var extname = path.extname(file);
  var targetfile = path.join(images, file);
  fs.readFile(targetfile, function (error, content) {
    res.writeHead(200, { "Content-Type": fileType(extname.replace(".", "")) });
    res.end(content, "utf-8");
  });
}

module.exports = {
  userPost,
  rolePost,
  getImages
};
