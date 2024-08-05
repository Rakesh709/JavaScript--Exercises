//promise means task is loaded but abhi ki abhi nhi hoga jab hoga tab notification mil jayega

//promise future mai ja kr run hoga 

//promise is created 
const promiseOne = new Promise(function(resolve, reject){
    // do async task 
    //calls , n/w ,db
    setTimeout(function(){
        console.log('Async task1 is complete');
        resolve();
    },1000)
});

//consuming promise
promiseOne.then(function(){
    console.log("Promise1 consume");
    
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task2 is complete');
        resolve();
    },1000)
}).then(function(){
    console.log("Promise2 consume");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"rakesh",email:"rakesh@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

//best way 
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= false
        if(!error){
            resolve({username:"rakesh",password:123})
        }else{
            reject("Error: Something went Wrong")
        }
    },1000)
})

//promise chaning
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("Promise is Finally done");
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= true
        if(!error){
            resolve({username:"Javascript",password:123})
        }else{
            reject("Error: js went Wrong")
        }
    },1000)
})


async function consumePromiseFive() {
    try {
        const response = await promiseFive
         console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
    
}

consumePromiseFive()


// async function getAllUser(){
//     try {
//         const response =  await fetch("https://randomuser.me/api/")
//         //respose is taking time to convert so make it await
//     const data = await response.json()
//     console.log(data)
        
//     } catch (error) {
//         console.log("E",error);
        
//     }
// }

// getAllUser()


fetch('https://randomuser.me/api/')
.then((response)=> {
    return response.json()
})
.then((data) =>{
    console.log(data);
    
})
.catch((error) => console.log(error));
