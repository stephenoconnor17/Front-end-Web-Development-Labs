let arrOfStrings : string[] = []; // init.

let addTask = (task : string) : number =>{
    arrOfStrings.push(task);
    console.log("Inserted task to back of ArrOfStrings");
    return arrOfStrings.length;
}

let listAllTasks = () : void=>{
    for(let i:number = 0; i<arrOfStrings.length; i++){
        console.log(arrOfStrings[i]);
    }
}

let deleteTask = (task : string) : number =>{
    for(let i:number = 0; i<arrOfStrings.length; i++){
        if(task == arrOfStrings[i]){
            arrOfStrings.splice(i,1);
            console.log("DELETION SUCCESSFUL");
        }
    }
    return arrOfStrings.length;
}

addTask("Shop");
addTask("Dine");
console.log(addTask("Sleep")); // show value of array

listAllTasks(); // should display the 3

deleteTask("Shop"); // should delete 1

listAllTasks(); // show remaining 2
