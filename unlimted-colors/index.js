//random color generator

const randomColor = function(){
    const hex= '0123456789ABCDEF';
    let color= '#'
    for(let i=0; i<6; i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}

//console.log(randomColor())
let intervalID;
const startChangingColor= function(){
    const chnageBgColor= function(){
        if(!intervalID){
            document.body.style.backgroundColor=randomColor();
        }
        
    }

    intervalID = setInterval(chnageBgColor,1000)
    
}


const stopChangingColor= function(){
    clearInterval(intervalID)
    //to free some memory 
    intervalID=null
}


document.querySelector("#start").addEventListener("click",startChangingColor)


document.querySelector("#stop").addEventListener("click",stopChangingColor)