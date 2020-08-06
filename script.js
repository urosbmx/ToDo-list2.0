// Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');



//Event listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
// todoList.addEventListener('click', completeCheck);



//Functions
function addTodo(event) {
    event.preventDefault();
    // creating div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //checkbutton
    const complitedButton = document.createElement('button');
    complitedButton.innerHTML = '<i class="fas fa-check"></i>';
    complitedButton.classList.add("complete-btn");
    todoDiv.appendChild(complitedButton);
    //deletebtn
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="far fa-trash-alt"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //appedn to list
    todoList.appendChild(todoDiv);
    //clearinput
    todoInput.value = "";
}
//Function delete
function deleteCheck(e) {
    const iteme = e.target;
    if (iteme.classList[0] === "trash-btn") {
        // iteme.remove();
        const todo = iteme.parentElement;
        todo.remove();
    }

    if (iteme.classList[0] === "complete-btn") {
        const todo = iteme.parentElement;
        todo.classList.toggle('complited');
    }
}






var data = new Date();
var year = data.getFullYear();
document.getElementById("year").innerHTML = year;