class Controller {

	findUserById(id, heroes) {
		return heroes.find((hero) => hero.id == id)
	}
	updateUserById(id, heroes, name) {
		var heroById = this.findUserById(id, heroes);
		heroById.name = name;
		return heroes;
	}
	addNewUser(json,heroes) {
		var idExistAlready = this.findUserById(json, heroes);
		var value;
		if (idExistAlready === undefined) {
			heroes.push(json);
			value = heroes;
		} else {
			value = "id already exist please choose a diffrent id.";
		}
		return value;
	}
	deleteUser(id, heroes) {
		var heroToDelete = this.findUserById(id, heroes);
		var value;
		if (heroToDelete === undefined) {
			value = "User id to delete does`nt Exist."
		} else {
			heroes.splice(heroes.indexOf(heroToDelete), 1);
			value = "the id : " + heroToDelete.id.toString() + " has been deleted."
		}
		return value;
	}
	deleteUserByTerm(term, heroes) {
		let value = "the users that have been deleted :";
		if (heroes.length === 0) {
			return "there are no users to delete."
		}
		for(let i=heroes.length-1;i>0;i--){
			if(heroes[i].name.indexOf(term) > -1){
				value += heroes[i].name+",";
				heroes.splice(i,1);
			}
		}
		return value;
	}
}
module.exports.ctrl = Controller;

