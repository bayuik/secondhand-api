const { Role }    = require('../../app/models');


async function rolePost(req, res){
    console.log("req body", req.query)
    var roleCreate = await Role.create({
        role: req.query.role
    }).then(Role => {
        return Role;
    })
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({message: "Success", display_message:"Create Success ", data: roleCreate}));
}

module.exports = rolePost