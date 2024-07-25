import inquirer from "inquirer";
let todoList = [];
let condition = true;
console.log("\n \t welcome in my TodoList Application\n");
// while(condition){
//     let todoQuestions = await inquirer.prompt([
//         {
//            name:"firstTask" ,
//            message:"what would you like to add in your todos?",
//            type:"input"
//         }
//     ]);
//     todoList.push(todoQuestions.firstTask);
//     console.log(`${todoQuestions.firstTask} Task added in todoList successfully!!!`);
//     let addMoreTodos = await inquirer.prompt([
//         {
//             name:"moreTodos",
//             type:"confirm",
//             message:"would you like to add more task in your todos?",
//             default:"false"
//         }
//     ])
//     condition = addMoreTodos.moreTodos
// }
// console.log("Your updated TodoList: " , todoList);
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                message: "Select an Option you want in your Todos",
                type: "list",
                choices: [
                    "Add Task", "Delete Task", "View ToDos", "Update Task", "Exit"
                ],
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "View ToDos") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            condition = false;
        }
    }
};
//add task
let addTask = async () => {
    let moreTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new Task in your ToDOS:"
        }
    ]);
    todoList.push(moreTask.task);
    console.log(`\n ${moreTask.task} Task added sucessfully in TOdos`);
};
//function for view all todo tasks
let viewTask = () => {
    console.log("\n \tYour ToDo List: \n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
    console.log("\n");
};
// delete todo list function
let deleteTask = async () => {
    await viewTask();
    let indexTask = await inquirer.prompt([
        {
            name: "index",
            message: "Enter the index no of task you want to delete :",
            type: "number"
        }
    ]);
    let deleteTask = todoList.splice(indexTask.index - 1, 1);
    console.log(`\n ${deleteTask}  This Task has been deleted successfully from your todos list`);
};
//update todo list function
let updateTask = async () => {
    await viewTask();
    let updatetaskindex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no' of task you want to update :"
        },
        {
            name: "UptoDate_task",
            type: "input",
            message: "Now Enter The New Task Name :"
        }
    ]);
    todoList[updatetaskindex.index - 1] = updatetaskindex.UptoDate_task;
    console.log(`\n Task at index no. ${updatetaskindex.index - 1} updated successfully [for updated list "View ToDos"]`);
};
main();
