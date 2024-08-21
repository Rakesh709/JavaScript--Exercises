const clock = document.getElementById("clock")

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString()
},1000)


const intClock = document.getElementById("int-clock")

setInterval(function(){
    let date = new Date();
    intClock.innerHTML= date.toLocaleTimeString("en-US", {timeZone: "America/New_York"});
},1000)


const clock3= document.querySelector("#london-clock")

setInterval(function(){
    let date= new Date();
    clock3.innerHTML = date.toLocaleTimeString("en-US", {timeZone: "Europe/London"})
},1000)
