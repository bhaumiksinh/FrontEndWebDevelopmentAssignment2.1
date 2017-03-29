var FatArrow = (function () {
    function FatArrow() {
        this.data = function (name, rollno) {
            return "My name is " + name + " and my rollno is " + rollno;
        };
    }
    return FatArrow;
}());
var obj1;
obj1 = new FatArrow;
