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
const filterCard = document.querySelector("#filter-card");
const allActiveComplete = document.querySelector(".all-active-complete")
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


//  THIS ISNT WORKING. PLEASE LOOK AT THE JPEGS I'VE SENT TO YOU TO SEE WHAT THIS IS SUPPOSED TO LOOK LIKE UPON RESIZE
// ALSO, MY MEDIA QUERIES ARE'NT WORKING CORRECTLY, THE BROWSER IS IGNORING MY OLD CSS EVEN ON THE SMALL SCREENS
// SOME POINTERS ON HOW TO GET MY FILTERS WORKING WOULD BE APPRECIATED AS WELL. MY CODE FOR THOSE DIDN'T WORK, SO I DELETED THEM.

    // window.addEventListener("resize", function(){
    //     if (window.outerWidth > 375){
    //         let filterHtml = "";
    
    //            filterHtml += `

    //            <div class="in-active" id="filter-card">
    //            <ul class="container" >
    //                <li><span class="task-counter"> </span>items left</li>
    //                </ul>

    //                <form class="  all-active-complete">
               
    //                <label for="all-todos">
    //                    <input type="radio"
    //                     name="filter-todos" 
    //                     class="filter-all" 
    //                     id="all-todos" 
    //                     value="all" 
    //                     checked />
    //                    <span>All</span> 
    //                 </label>
    
    //                 <label for="active-todos">
    //                    <input type="radio"
    //                     name="filter-todos" 
    //                     class="todos" 
    //                     id="active-todos" 
    //                     value="active"/>
    //                    <span>Active</span> 
    //                 </label>
    
    //                 <label for="completed-todos">
    //                    <input type="radio"
    //                     name="filter-todos" 
    //                     class="todos" 
    //                     id="completed-todos" 
    //                     value="completed"/>
    //                    <span>Completed</span> 
    //                 </label>  
    //            </form>
    

    //                <ul>
    //                <li class="clear-completed">Clear Completed</li>
    //            </ul>

    //    </div>
    //            `; 

    //            filterCard.innerHTML = filterHtml
        
    //         console.log(filterCard.innerHTML)
    //         console.log(allActiveComplete.innerHTML)
    //         }

})

