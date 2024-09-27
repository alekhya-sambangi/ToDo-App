let todo = [];
let req = prompt("Please Enter your choice:");
while (true) {
    if (req == "quit" || req == "Quit") {
        console.log("quitting app");
        break;
    }
    if (req == "list" || req == "List") {
        console.log("-------------");
        for (let list = 0; list < todo.length;list++) {
            console.log(list,todo[list]);
            console.log("-------------");
        }
    } else if (req == "add" || req == "Add") {
        let task = prompt("Enter the task u wanna add");
        todo.push(task);
        console.log("task added");
    } else if (req == "delete" || req == "Delete") {
        let index = prompt("enter task number to delete that task:");
        todo.splice(index, 1);
        console.log(`task ${index} is deleted`);
    } else {
        console.log("wrong request!");
    }
    req = prompt("Please Enter your choice:");
}

