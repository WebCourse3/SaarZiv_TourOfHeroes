const express = require('express');
const router = express.Router();
let heroes = require("./heroes_db");
const controller = require("./controller");

let cont = new controller.cont();


router.get("/",function (req,res) {
	res.send(heroes.heroes);
});
router.get("/:id",function (req,res) {
	res.send(cont.findUserById(req.param("id"),heroes.heroes));
});
router.put("/:id",function (req,res) {
	cont.updateUserById(req.param("id"),heroes.heroes,req.query.name);
	res.send(heroes.heroes);
});
router.post("/" ,function (req,res) {
	res.send(cont.addNewUser(req.body.id,heroes.heroes,req.body));
});

router.delete("/:id",function(req,res){
	res.send(cont.deleteUser(req.param("id"),heroes.heroes));
});
router.delete("/",function(req,res){

	res.send(cont.deleteUserByTerm(req.query.name,heroes.heroes));
});


module.exports=router;