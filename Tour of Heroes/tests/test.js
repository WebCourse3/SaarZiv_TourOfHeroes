//comment for pull req
let heroesTest = [
	{id:0, name:"dani"},
	{id:1, name:"yosi"},
	{id:2, name:"moshe"},
	{id:3, name:"lary"},
	{id:4, name:"eli"},
	{id:5, name:"elinor"}
];
let assert = require('assert');
let heroes = require("./../js/heroes_db");
const controller = require("./../js/controller");
let ctrl = new controller.ctrl();
let sinon = require("sinon");
let chai = require('chai');
chai.should();

describe('info validation', function() {
	describe('#validateArray()', function() {
		it('should contain data', function() {
			assert.notEqual(0,heroesTest.length);
		});
	});
});
describe("findUserById",function () {
	it("should return user by id",function () {
		let testId = 5;
		let testHero = ctrl.findUserById(testId,heroesTest);
		assert.equal(heroesTest[testId],testHero);
	});
});



describe("updateUserById",function () {
	it("should update a hero values by id",function () {
        const contStub = {};
        contStub.getHeroByIdStub = sinon.stub();
        contStub.getHeroByIdStub.withArgs(1,heroesTest).returns(heroesTest[1]);
        ctrl.findUserById = contStub.getHeroByIdStub;
        
		let testId = 1;
		let testOldName = heroesTest[1].name;
		let testNewName  ="MoshikAFialo";
		ctrl.updateUserById(testId,heroesTest,testNewName);
		assert.notEqual(testOldName,heroesTest[1].name);
	})
});
describe('addNewUser',function () {
    it('should increase heroes array length', function () {
        let heroesInitialLength = heroesTest.length;
        let testHero = {id: 8, name: "larry"};
        ctrl.addNewUser(testHero, heroesTest);
        assert.equal(heroesInitialLength + 1, heroesTest.length);
    });
});
describe("deleteUser",function () {
	it("should delete user by id",function (){
		let heroesInitialLength = heroesTest.length;
		let heroTestId = 1;
		let heroToBeDel = heroesTest[heroTestId];
		ctrl.deleteUser(heroTestId,heroesTest);
		let numUserDeleted = heroesInitialLength - heroesTest.length;
		assert.notEqual(numUserDeleted,0);
	});

});

describe("deleteUserByTerm",function () {
	it("should delete user/s according to term",function () {
		let heroesInitialLength = heroesTest.length;
		let termTest = "e";
		let userDeleted = ctrl.deleteUserByTerm(termTest,heroesTest);
		let numUserDeleted = heroesInitialLength - heroesTest.length;
		assert.notEqual(numUserDeleted,0);
	});
});

