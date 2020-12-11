const body = document.querySelector("body");

const IMG_NUM = 5;

function handleImageLoad(){
    console.log("finished loading");
}

function paintImg(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber}.png`;
    image.classList.add("bgimage");
    body.prepend(image);
    image.addEventListener("loadend",handleImageLoad);
    
}


function genRandom(){
    const number = Math.ceil(Math.random() * IMG_NUM);
    return number
}


function init(){
    const randomNum = genRandom();
    paintImg(randomNum);
}

init();