
//#2-3 들어야함


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


//나누기//

const title = document.getElementById("title");

console.log(title);

title.innerText = "changed from js";