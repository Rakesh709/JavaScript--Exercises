let submitButton = document.getElementById("submit")

function throttle(func,delay){
    let shouldCall = true
    return function(...args){
        if(!shouldCall) return;

        func(...args);
        shouldCall=false

        setTimeout(()=>{
            shouldCall=true
        },delay)
    }
}



let myButton = function(){
    console.log("button clicked...");
    
}


submitButton.addEventListener("click",throttle(myButton,500))