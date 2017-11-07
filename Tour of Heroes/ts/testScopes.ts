
let Name = "BigDani";
let age = 40;

interface Itest{
	func:()=>string
}

class TestScope {
	public obj :Itest;
	public Name= "smallDani";
	public age = 20;

	constructor(){
		 this.obj = {
			 func: this.showDetails.bind(this) //if i wont use bind this , the scope of the function when ran would be obj
			 //so the output will be undefined.
	   }
	}
	showDetails(){
		return this.Name + "  is :"+ this.age + " years old."
	}
}

let tst = new TestScope();
console.log(tst.obj.func())


