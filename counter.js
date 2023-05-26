let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0
let counterDOM = document.querySelector("#counter")
let increaseDOM= document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")
let resetDOM = document.querySelector("#reset")

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click",clickevent)
decreaseDOM.addEventListener("click",clickevent)
resetDOM.addEventListener("click",clickevent)

function clickevent(){
    
    if(this.id=="increase"){
        counterDOM.innerHTML = counter+=1
    }else if(this.id=="decrease"){
        counterDOM.innerHTML =   counter-=1
    }else if(this.id=="reset"){
        counterDOM.innerHTML = counter=0
    }
    localStorage.setItem("counter",counter)
}