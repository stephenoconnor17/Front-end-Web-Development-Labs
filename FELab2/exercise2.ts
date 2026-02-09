interface myInterface{
    myArr : string[]; // same as String myArr[];
    addTask(task : string) : number; // same as int addTask(Strubg task)
    listAllTasks() : void;
    deleteTask(task : string) : number;
}

class myClass implements myInterface{
    myArr: string[] = []; // like = new Object();

    addTask(task: string): number {
        this.myArr.push(task);
        console.log("Inserted task to back of MyArr");
        return this.myArr.length;
    }

    listAllTasks(): void {
        for(let i:number = 0; i<this.myArr.length; i++){
            console.log(this.myArr[i]);
        }
    }

    deleteTask(task: string): number {
        for(let i:number = 0; i<this.myArr.length; i++){
            if(task === this.myArr[i]){ //type STRICTNESS
                this.myArr.splice(i,1);
                console.log("DELETION SUCCESSFUL");
                break;
            }else if(i == (this.myArr.length - 1)){
                console.log("COULD NOT FIND");
            }
        }
        return this.myArr.length;
    }

}

const george : myClass = new myClass();
george.addTask("Shop");
george.addTask("Dine");
console.log(george.addTask("Sleep"));

george.listAllTasks();

george.deleteTask("Shop");
george.deleteTask("Rob people");

george.listAllTasks();
