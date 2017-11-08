var Name = "BigDani";
var age = 40;
var TestScope = (function () {
    function TestScope() {
        this.Name = "smallDani";
        this.age = 20;
        this.obj = {
            func: this.showDetails.bind(this) //if i wont use bind this , the scope of the function when ran would be obj
            //so the output will be undefined.
        };
    }
    TestScope.prototype.showDetails = function () {
        return this.Name + "  is :" + this.age + " years old.";
    };
    return TestScope;
}());
var tst = new TestScope();
console.log(tst.obj.func());
//# sourceMappingURL=testScopes.js.map