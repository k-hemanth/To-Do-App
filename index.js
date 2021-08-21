const toDoInput = document.querySelector(".todo-input");
const toDoBtn = document.querySelector(".todo-btn");
const toDoList = document.querySelector(".todo-list");

let toDoListElements = [];

toDoBtn.addEventListener("click", addToDoList);
toDoList.addEventListener("click", deleteCheck);

function addToDoList(event) {
    event.preventDefault();
    if (toDoInput.value === "") {
        alert("Empty Input");
    } else {
        const toDoDiv = document.createElement("div");
        toDoDiv.classList.add("todo", "theme-todo");

        const newToDo = document.createElement("li");

        newToDo.innerText = toDoInput.value;
        newToDo.classList.add("todo-item");
        toDoDiv.appendChild(newToDo);

        toDoListElements.push(toDoInput.value);
        const checked = document.createElement("button");
        checked.innerHTML = '<i class="fas fa-check"></i>';
        checked.classList.add("check-btn", "theme-button");
        toDoDiv.appendChild(checked);

        const deleted = document.createElement("button");
        deleted.innerHTML = '<i class="fas fa-trash"></i>';
        deleted.classList.add("delete-btn", "theme-button");
        toDoDiv.appendChild(deleted);

        toDoList.appendChild(toDoDiv);

        toDoInput.value = "";
    }
}

function deleteCheck(event) {
    const item = event.target;
    if (item.classList[0] === "delete-btn") {
        removeLocalTodoList(item.parentElement);
        item.parentElement.remove();
    }

    if (item.classList[0] === "check-btn") {
        item.parentElement.classList.toggle("completed");
    }
}

function removeLocalTodoList(todo) {
    const todoIndex = toDoListElements.indexOf(todo.children[0].innerText);
    toDoListElements.splice(todoIndex, 1);
}
