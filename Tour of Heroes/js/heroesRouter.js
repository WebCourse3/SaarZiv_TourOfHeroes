const express = require('express');
const router = express.Router();
let heroes = require("./heroes_db");
const controller = require("./controller");
let ctrl = new controller.ctrl();


router.get("/",function (req,res) {
	res.send(heroes.heroes);
});
router.get("/:id",function (req,res) {
	res.send(ctrl.findUserById(req.param("id"),heroes.heroes));
});
router.put("/:id",function (req,res) {
    ctrl.updateUserById(req.param("id"),heroes.heroes,req.query.name);
	res.send(heroes.heroes);
});
router.post("/" ,function (req,res) {
	res.send(ctrl.addNewUser(req.body,heroes.heroes));
});

router.delete("/:id",function(req,res){
	res.send(ctrl.deleteUser(req.param("id"),heroes.heroes));
});
router.delete("/",function(req,res){

	res.send(ctrl.deleteUserByTerm(req.query.name,heroes.heroes));
});


module.exports=router;