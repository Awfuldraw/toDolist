
function sayHello(name,age){   
    return `hello ${name} you are ${age} years old`;
}

const greetNicolas = sayHello("nicolas",14);

console.log(greetNicolas);

const calculator = {
    plus : function(a, b){
        return a + b;    
    },
    multi : function(a, b) {
        return a * b;        
    }
};

const plus = calculator.plus(5, 6);
const multi = calculator.multi(4, 4);

console.log(plus);
console.log(multi);



const title = document.querySelector("#title");



const  BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";
const CLICKED_CLASS = "clicked";

function handleClick(){
  title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handleClick);
}

init();

