const readLine = require("readline");

const rl = readLine.createInterface({
    input : process.stdin,
    output : process.stdout
});

const todos = []

const showMenu = () =>{
    console.log("\n 1. Add a task")
    console.log("\n 2. View a task")
    console.log("\n 3. Exit")
    rl.question("Choose An Option : " , (option)=>{
        if(option == 1){
            rl.question("Enter A task :" , (task)=>{
                todos.push(task)
                console.log("Task  Added");
                showMenu();
            })
        }else if (option == 2){
            todos.forEach((item , index) => {
                console.log(`${index+1}.${item}`);
                showMenu();
            })
        }else if(option == 3){
            console.log('Good Byee');
            rl.close();
        }else{
            console.log("Invalid Option")
            showMenu();
        }
    })
}
showMenu();