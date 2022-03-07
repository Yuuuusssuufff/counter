const body = document.body
    const getReader = document.querySelector(".reader");
const add = document.querySelector("#add");
const subtract =document.querySelector(".subtract");
let count = 0;

read();

add.addEventListener("click", function(){
    count++;
    read();
})
subtract.addEventListener("click", function(){
    count--;
    read();
    
})

function read(){
    getReader.innerText = count
}
