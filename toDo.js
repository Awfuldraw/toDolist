//3-6


const toDoForm = document.querySelector(".js-toDoform"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDos"

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.value = "○";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);    
    toDoList.appendChild(li);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDo(){
    const toDos = localStorage.getItem(TODO_LS);
    if(toDos !== null){
      
    }
}


function init(){
    loadToDo();
    toDoForm.addEventListener("submit",handleSubmit)
}

init();