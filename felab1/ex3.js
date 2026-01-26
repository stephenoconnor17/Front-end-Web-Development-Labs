var flag = true;
var myName = "stephen";
var x = 3;
var y = [1, 2, 3, 4];
var names = ["Hello", "My name ist", myName];
function greet(name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
greet(names[2]);
console.log("FLAG: " + flag + "\nNumber: " + x + "\nNumber 2: " + y[x]);
for (var i = 0; i < y.length; i++) {
    console.log(y[i]);
}
