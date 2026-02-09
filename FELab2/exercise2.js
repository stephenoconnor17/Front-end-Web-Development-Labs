var myClass = /** @class */ (function () {
    function myClass() {
        this.myArr = []; // like = new Object();
    }
    myClass.prototype.addTask = function (task) {
        this.myArr.push(task);
        console.log("Inserted task to back of MyArr");
        return this.myArr.length;
    };
    myClass.prototype.listAllTasks = function () {
        for (var i = 0; i < this.myArr.length; i++) {
            console.log(this.myArr[i]);
        }
    };
    myClass.prototype.deleteTask = function (task) {
        for (var i = 0; i < this.myArr.length; i++) {
            if (task === this.myArr[i]) { //type STRICTNESS
                this.myArr.splice(i, 1);
                console.log("DELETION SUCCESSFUL");
                break;
            }
            else if (i == (this.myArr.length - 1)) {
                console.log("COULD NOT FIND");
            }
        }
        return this.myArr.length;
    };
    return myClass;
}());
var george = new myClass();
george.addTask("Shop");
george.addTask("Dine");
console.log(george.addTask("Sleep"));
george.listAllTasks();
george.deleteTask("Shop");
george.deleteTask("Rob people");
george.listAllTasks();
