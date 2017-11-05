var express = require('express');
var router = express.Router();
var heroes = require("./heroes_db");

router.get("/",function (req,res) {
	res.send(heroes);
});
router.get("/:id",function (req,res) {
	res.send(findUserById(req.param("id"),heroes));
});
router.put("/:id",function (req,res) {
	updateUserById(req.param("id"),heroes,req.query.name);
	res.send(heroes);
});
router.post("/" ,function (req,res) {
	res.send(addNewUser(req.body.id,heroes,req.body));
});

router.delete("/:id",function(req,res){
	res.send(deleteUser(req.param("id"),heroes));
});
router.delete("/",function(req,res){
	res.send(deleteUserByTerm(req.query.name,heroes));
});

var findUserById = function (id,heroes) {
	return heroes.find((hero) => hero.id == id )
}
var updateUserById = function (id,heroes,name){
	var heroById = findUserById(req.param("id"),heroes);
	heroById.name = name;
	return heroes;
}
var addNewUser = function (id,heroes,json) {
	var idExistAlready = findUserById(id,heroes);
	var value;
	if(idExistAlready === undefined){
		heroes.push(json);
		value = heroes;
	}else{
		value = "id already exist please choose a diffrent id.";
	}
	return value;
}
var deleteUser = function (id,heroes) {
	var heroToDelete = findUserById(id,heroes);
	var value;
	if(heroToDelete === undefined){
		value = "User id to delete does`nt Exist."
	}else{
		heroes.splice(heroes.indexOf(heroToDelete), 1);
		value = "the id : " + heroToDelete.id.toString() + " has been deleted."
	}
	return value;
}
var deleteUserByTerm = function (term,heroes) {
	var heroesToDelete =[];
	heroesToDelete.push((heroes.find((hero) => { if(hero.name.indexOf(term) > -1){return hero}})));
	var value = "";
	if(heroesToDelete.length ===0){return "there are no users to delete."}
	for (let hero of heroesToDelete) {
		heroes.splice(heroes.indexOf(hero), 1);
		value += "the name : " + hero.name + " has been deleted.`n"
	}
	return value;
}

module.exports=router;