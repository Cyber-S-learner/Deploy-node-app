const readline = require("node:readline");
const { todo } = require("node:test");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const todos = [];

const showMenu = ()=>{
    console.log("1. Add a task");
    console.log("2. Show all tasks");
    console.log("3. Exit");
    rl.question("Choose an option:",handleInput);
}

const handleInput = (option)=>{
    if(option === "1")
    {
        rl.question("Enter the task:",(task)=>{
            todos.push(task);
            console.log("Task added",task);
            showMenu();
        })
    }

    else if(option === "2")
    {
        console.log("TO-DO list is:");
        todos.forEach((item,index)=>{
            console.log(`${index+1}. ${item}`);
        });
        showMenu();
    }
    else if(option === "3")
    {
        console.log("Good Bye!!");
        rl.close();

    }
    else{
        console.log("Invalid Option. Choose correct option");
        showMenu();
    }
}

showMenu();