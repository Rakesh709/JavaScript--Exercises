const endpoint = "https://jsonplaceholder.org/users"

//fetch api is promise 
// so working with promise always put await

const getData = async ()=>{
    const resp = await fetch(endpoint);

    if(!resp.ok){
        console.log("something wrong");
        
    }

    const data = await resp.json();

    const div = document.createElement("div")
    div.className= "main"
    div.id= "mainId"
    div.innerHTML="good"
    document.body.appendChild(div)
    console.log(data);
    
}

getData();