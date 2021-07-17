
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


    // COUNTING TODO ITEMS//

    function activeItemCount(){
        let todoItems = todoList.children.length 
        let activeItemsCount = todoItems - document.querySelectorAll(".completed-task").length -1
        let existingTasks = activeItemsCount++;
        let taskCounter = document.getElementsByClassName("task-counter");
        for (let i = 0; i < taskCounter.length; i++){
            taskCounter[i].innerHTML= activeItemsCount + " ";
        }    
    } 


//SUBMITTING AN ENTRY TO THE DOM//
submitTodo.addEventListener("mousedown", function(){
    submitTodo.classList.add("button-active")

})
submitTodo.addEventListener("mouseup", function(){
    submitTodo.classList.remove("button-active")

})

createTodoForm.addEventListener("submit", event=>{

    event.preventDefault();
    activeItemCount()


    //SWICHING FILTERCARDS TO FIT WINDOW SIZE//

    if (window.outerWidth >= 997){
        bigFilterCard.classList.remove("in-active")
    } else{
        filterCard.classList.remove("in-active")
    }


    //FORMING TODO ITEM//

    const entryTab = document.createElement('div');
    entryTab.classList.add('entry-tab');
    const singleEntry = document.createElement('li');
    singleEntry.innerHTML = todoInput.value;
    singleEntry.classList.add('entry');
    singleEntry.setAttribute("id", "active-todos")


    //APPENDING TASK-COMPLETED BUTTON//

    const taskcompletedButton = document.createElement('button');
    taskcompletedButton.setAttribute("id",'complete_btn')
    entryTab.appendChild(taskcompletedButton);
    

    //APPENDING TODO-ITEM TO DIV//

    entryTab.appendChild(singleEntry);

    if(todoInput.value === ""){
        return null
    }
    

    //APPENDING TODO-DIV TO DOM//

    todoList.appendChild(entryTab);
    todoInput.value=""


    //ADDING FUNCTIONALITY TASK-COMPLETED BUTTON//
    
    taskcompletedButton.addEventListener("click", event=>{
        event.preventDefault();
        if (singleEntry.classList.contains("completed-task")){
            singleEntry.removeAttribute("id", "completed-todos")
            singleEntry.classList.remove("completed-task")
            taskcompletedButton.classList.remove("button-active");
            taskcompletedButton.blur()
        }
        else{
            singleEntry.removeAttribute("id", "active-todos")
            singleEntry.setAttribute("id", "completed-todos")
            singleEntry.classList.add("completed-task");
            taskcompletedButton.classList.add("button-active");
        }
        activeItemCount()
        }) 


    // CLEAR COMPLETED ITEMS
    
        document.querySelector("#clear-completed").addEventListener("click", event=>{
        event.preventDefault();
        if (singleEntry.classList.contains("completed-task")){
            // singleEntry.style.display = "none"
            entryTab.removeChild(singleEntry)
            entryTab.removeChild(taskcompletedButton)
           entryTab.classList.remove("entry-tab")
           entryTab.classList.add("in-active")         
        }
        }) 
    

    //TOGGLING DELETE-TASK-BUTTON VISIBILITY//

    entryTab.addEventListener("mousemove", event=>{
        entryTab.appendChild(deleteTask)
        deleteTask.classList.remove("in-active");    
        })

    entryTab.addEventListener("mouseout", function(){
        deleteTask.classList.add("in-active");
        })
    

    //ADDING FUNCTIONALITY TO DELETE-TASK-BUTTON//
    
    const deleteTaskS = document.querySelectorAll("#delete");
        for (let i = 0; i < deleteTaskS.length; i++){
            deleteTaskS[i].addEventListener("click", function(){
                this.parentNode.parentNode.removeChild(this.parentNode);
                activeItemCount()
            })        
        }


 // RESIZING THE WINDOW AMIDST ACTIVITY//

window.addEventListener("resize", function(){
    if  (window.outerWidth >= 997 && entryTab.classList == "entry-tab" && filterCard.classList !== "in-active"){
        bigFilterCard.classList.remove("in-active")
        }

    if (window.outerWidth < 997 && entryTab.classList !== "entry-tab" && filterCard.classList == "in-active") {
        filterCard.classList.remove("in-active")
        } 
    })
    
    

    //ALL/ACTIVE/COMPLETE FILTERING

    allActiveComplete.addEventListener("change", event => {
        let completedTasks = document.querySelectorAll(".completed-task") ;
        const value = event.target.value; 
        
        switch (value) {
             case "all":
                if (singleEntry.classList.contains("completed-task")){
                    entryTab.style.display = "flex"
                }
                if (!singleEntry.classList.contains("completed-task")){
                    entryTab.style.display = "flex"
                }

             break
             case "active":
                if (singleEntry.classList.contains("completed-task")){
                    entryTab.style.display = "none"
                }
                if (!singleEntry.classList.contains("completed-task")){
                    entryTab.style.display = "flex"
                }
             break
             case "completed":
                if (singleEntry.classList.contains("completed-task")){
                    entryTab.style.display = "flex"

                }
                if (!singleEntry.classList.contains("completed-task")){
                    entryTab.style.display = "none"
                }
             break
        }
    })
     
}) //CLOSE ENTRY SUBMISSION



