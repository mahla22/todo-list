const todoInput = document.querySelector("input");
const todoList = document.querySelector(".todoList");

loadTasks();
function loadTasks() {
    
    const taskStorage = localStorage.getItem("taskStorage");
    if(taskStorage !== null) {
        todoList.insertAdjacentHTML("beforeend", taskStorage);
    }
    else {
        todoList.innerHTML = "";
    }
    countTasks();
}

todoInput.addEventListener("keydown", (e) =>{
    if(e.key == 'Enter') {
        insertTask();
        countTasks();
    }
})

function insertTask() {
   
   if(todoInput.value !== ""){
        let element = `
        <div class="task">
            <button class="checkBtn" onclick="checkBtn(this)">
                <i class='bx bx-check'></i>
            </button>
            <span class="taskLocation" onclick="checkBtn(this)">${todoInput.value}</span>
            <button class="deleteBtn" onclick='deleteBtn()'>
                <i class='bx bx-trash'></i>
            </button>
        </div>`;
        todoList.insertAdjacentHTML("afterbegin", element);
        saveTasks();
        countTasks();
        todoInput.value = '';
    }
    else {
        alert("please input a todo");
    }
}
function deleteBtn() {
    const task = document.querySelector(".task");
    task.remove();
    saveTasks();
    countTasks();
    
}
function checkBtn(element) {
    const task = element.parentElement;
    task.classList.toggle("true");
    countTasks();
}

function clearAll() {
    if(confirm("clear all tasks?")) {
        let task = document.getElementsByClassName("task true");
        if (task.length > 0){
            for(i = 0; i < task.length; i++){
                task[i].innerHTML = "";
                task[i].classList.remove("true");
                saveTasks();
            }
        }
        else {
            todoList.innerHTML = "";
            saveTasks(); 
        }
    }
    countTasks();
}
function countTasks() {
    let counter = document.querySelector(".counter");
    counter.innerHTML = document.querySelectorAll(".task:not(.true)").length;
}
function saveTasks() {
    localStorage.setItem("taskStorage" , todoList.innerHTML);
}