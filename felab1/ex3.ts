// variableName:variableType is the system for typing variables.
//for arrays its simple as variableType[] or any.
//i.e x:number[] = [] or x:any = []

//function parameters also need their type to be defined

let flag:boolean = true;
let myName:string = "stephen";
let x:number = 3;

let y:number[] = [1,2,3,4];
let names:any = ["Hello", "My name ist", myName];

function greet(name:string){
    console.log("Hello, " + name.toUpperCase() + "!!");
}

greet(names[2]);
console.log("FLAG: " + flag + "\nNumber: " + x + "\nNumber 2: " + y[x]);
for(let i = 0; i < y.length; i++){
    console.log(y[i]);
}

