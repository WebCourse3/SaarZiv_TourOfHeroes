var express = require('express');
var router = express.Router();

var heroes = [
	{id:0, name:"dani"},
	{id:1, name:"yosi"},
	{id:2, name:"moshe"},
	{id:3, name:"lary"},
	{id:4, name:"eli"},
	{id:5, name:"menachem"}
];



router.get("/",function (req,res) {
	res.send(heroes);
});
router.get("/:id",function (req,res) {
	res.send(heroes.find((hero) => hero.id == req.param("id") ));
});
router.put("/:id",function (req,res) {
	var heroById = heroes.find((hero) => hero.id == req.param("id"));
	heroById.name = req.query.name;
	res.send(heroes);
});


router.post("/" ,function (req,res) {
	var idExistAlready = heroes.find((hero) => hero.id == req.body.id);
	var value;
	if(idExistAlready == undefined){
		heroes.push(req.body);
		value = heroes;
	}else{
		value = "id already exist please choose a diffrent id.";
	}
	res.send(value);
});

router.delete("/:id",function(req,res){
	var heroToDelete = heroes.find((hero) => hero.id == req.param("id"));
	var value;
	if(heroToDelete == undefined){
		value = "User id to delete doesnt Exist."
	}else{
		heroes.splice(heroes.indexOf(heroToDelete), 1);
		value = "the id : " + heroToDelete.id.toString() + " has been deleted."
	}
	res.send(value);

});
router.delete("/",function(req,res){
	var heroToDelete = heroes.find((hero) => hero.name == req.query.name);
	var value;
	if(heroToDelete == undefined){
		value = "User name to delete doesnt Exist."
	}else{
		heroes.splice(heroes.indexOf(heroToDelete), 1);
		value = "the name : " + heroToDelete.name + " has been deleted."
	}
	res.send(value);

});


module.exports=router;