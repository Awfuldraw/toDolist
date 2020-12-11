

// 시발 컨트롤 시프트 

const toDoForm = document.querySelector(".js-toDoform"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDos"


let toDos = [];

function delToDo(event){
   const btn = event.target;
   const li = btn.parentNode
   toDoList.removeChild(li);
   const cleanToDos = toDos.filter(function(toDo){
    return toDo.id !== parseInt(li.id);
   })
   toDos = cleanToDos;
   saveToDos();
}


function saveToDos(){
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}


function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.value = "☎";
    delBtn.addEventListener("click",delToDo)
    const span = document.createElement("span");
    const newId = toDos.length + 1 ;
    span.innerText = text;
    li.appendChild(delBtn);
    li.id =  newId;
    li.appendChild(span);   
    toDoList.appendChild(li);
    const toDosObj = {
        text: text,
        id : newId
    };
    toDos.push(toDosObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODO_LS);
    if(loadedToDos !== null){
      const parsedToDos = JSON.parse(loadedToDos);
      parsedToDos.forEach(function(toDo) {
        paintToDo(toDo.text);
      });
    }
}       


function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit)
}

init();