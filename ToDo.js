
// DAY AND NIGHT MODE TOGGLE//

const suN = document.querySelector("#sun");
const mooN = document.querySelector("#moon");
const element = document.body;

mooN.addEventListener("click", function(){
  element.classList.toggle("dark-mode");
  suN.classList.toggle("in-active");
  mooN.classList.add("in-active")
})

suN.addEventListener("click", function(){
    element.classList.remove("dark-mode");
    mooN.classList.toggle("in-active");
    suN.classList.add("in-active")
})


// CREATING A NEW TODO ENTRY//

const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector(".todo-list");
const submitTodo= document.querySelector("#submit-todo");
const createTodoForm = document.querySelector(".create-todo");
const filterCard = document.querySelector("#filter-card");
const bigFilterCard = document.querySelector("#big-filter-card");
const allActiveComplete = document.querySelector(".all-active-complete");
const deleteTask = document.querySelector("#delete");

createTodoForm.addEventListener("submit", event=>{
    event.preventDefault();
    if (window.outerWidth >= 997){
        bigFilterCard.classList.remove("in-active")
    } else{
        filterCard.classList.remove("in-active")
    }
    const entryTab = document.createElement('div');
    entryTab.classList.add('entry-tab');
    const singleEntry = document.createElement('li');
    singleEntry.innerHTML = todoInput.value;
    singleEntry.classList.add('entry');

    const taskcompletedButton = document.createElement('button');
    taskcompletedButton.setAttribute("id",'complete_btn')
    entryTab.appendChild(taskcompletedButton);
    
    entryTab.appendChild(singleEntry);

    if(todoInput.value === ""){
        return null
    }
  
    todoList.appendChild(entryTab);
    todoInput.value=""
    submitTodo.blur();

    taskcompletedButton.addEventListener("click", event=>{
        event.preventDefault();
        singleEntry.classList.add("completed-task");
        taskcompletedButton.focus();
        // console.log(singleEntry.classList)
        })
    entryTab.addEventListener("mousemove", event=>{
        entryTab.appendChild(deleteTask)
        deleteTask.classList.remove("in-active");    
        })

    entryTab.addEventListener("mouseout", function(){
        deleteTask.classList.add("in-active");
        })
    
    const deleteTaskS = document.querySelectorAll("#delete");
        for (let i = 0; i < deleteTaskS.length; i++){
            deleteTaskS[i].addEventListener("click", function(){
                this.parentNode.parentNode.removeChild(this.parentNode);
            })        
        }


 // RESIZING THE WINDOW AMIDST ACTIVITY//

window.addEventListener("resize", function(){
    if  (window.outerWidth >= 997 && entryTab.classList == "entry-tab" && filterCard.classList !== "in-active"){
        // console.log("meow");
        bigFilterCard.classList.remove("in-active")
        }

    if (window.outerWidth < 997 && entryTab.classList !== "entry-tab" && filterCard.classList == "in-active") {
        // console.log("woof");
        filterCard.classList.remove("in-active")
        } 
    })


    // FILTERING TODO ITEMS
    let completedTasks = document.querySelectorAll("completed-task");
    let existingTasks = todoList.children.length -1
    let taskCounter = document.getElementsByClassName("task-counter");
    for (let i = 0; i < taskCounter.length; i++){
        taskCounter[i].innerHTML= existingTasks + " "
    }
    const allClear = document.getElementsByClassName("clear-completed");






})




