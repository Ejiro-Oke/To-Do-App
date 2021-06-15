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


const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector(".todo-list");
const submitTodo= document.querySelector("#submit-todo");
const createTodoForm = document.querySelector(".create-todo");
const filterCard = document.querySelector("#filter-card")
const deleteTask = document.querySelector("#delete");
let taskCounter = document.querySelector(".task-counter")





createTodoForm.addEventListener("submit", event=>{
    event.preventDefault();
    filterCard.classList.remove("in-active")
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
        singleEntry.style.textDecoration= "line-through";
        taskcompletedButton.focus();
        })
    entryTab.addEventListener("mousemove", event=>{
        // console.log("yep");
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

})




