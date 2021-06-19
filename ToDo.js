
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
const allActiveComplete = document.querySelectorAll(".all-active-complete");
const deleteTask = document.querySelector("#delete");


    // COUNTING TODO ITEMS//

    function activeItemCount(){
        let completedTasks = document.querySelectorAll(".completed-task");
        let existingTasks = todoList.children.length++;
        let taskCounter = document.getElementsByClassName("task-counter");
        for (let i = 0; i < taskCounter.length; i++){
            taskCounter[i].innerHTML= existingTasks + " ";
        }    
    } 


//SUBMITTING AN ENTRY TO THE DOM//

createTodoForm.addEventListener("submit", event=>{

    event.preventDefault();


    //SWICHING FILTERCARDS TO FIT WINDOW SIZE//

    if (window.outerWidth >= 997){
        bigFilterCard.classList.remove("in-active")
    } else{
        filterCard.classList.remove("in-active")
    }

    activeItemCount()


    //FORMING TODO ITEM//

    const entryTab = document.createElement('div');
    entryTab.classList.add('entry-tab');
    const singleEntry = document.createElement('li');
    singleEntry.innerHTML = todoInput.value;
    singleEntry.classList.add('entry');


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
    submitTodo.blur();


    //ADDING FUNCTIONALITY TASK-COMPLETED BUTTON//
    
    taskcompletedButton.addEventListener("click", event=>{
        event.preventDefault();
        singleEntry.classList.add("completed-task");
        taskcompletedButton.focus();
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
                activeItemCount()
                this.parentNode.parentNode.removeChild(this.parentNode);
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
    
    
    //CLEAR COMPLETED ITEMS

    // const allClear = document.querySelectorAll(".clear-completed");
    // allClear.addEventListener("click", event=>{
    //     console.log("meow")
    //     })

    //ALL/ACTIVE/COMPLETE FILTERING

    // allActiveComplete.addEventListener("change", (e) => {
    //     const value = e.target.value;

    //     for(let i = 0; i < singleEntry.length; i++){

    //     switch (value) {
    //       case "all":
    //           singleEntry[i].style.display ='flex'
    //         break;
    //       case "active":
    //         if(singleEntry[i].classList !== ('.task-completed')){
    //             singleEntry[i].style.display ="flex"
    //         }
    //         else{
    //             this.parentNode.parentNode.removeChild(this.parentNode);
    //         }
    //         break;
    //       case "completed":
    //         if(singleEntry[i].classList == ('.task-completed')){
    //             singleEntry[i].style.display ="flex"
    //         }
    //         else{
    //             this.parentNode.parentNode.removeChild(this.parentNode);
    //         }
    //         break;
    //     }
    // }
    //   });
      


}) //CLOSE ENTRY SUBMISSION



