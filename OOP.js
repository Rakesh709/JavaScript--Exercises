//object literals 

const user = {
    //these are the property
    username : "Rakesh",
    loginCount: 4,
    signedIn :true,
    getUserDetails: function(){
        // console.log("Got user details from database");
       // console.log(`username is ${this.username}`);
    //console.log(this);
    
        
    }


}

//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);
//obove will give empty that doesn't know the current context soit will be empty


//+++++++++++++++++++++++++Constructor +++++++++++++++++++++++++++++

// const promisOne = new Promise()
// const data = new Date()

//new is constructor function 

function User(username,loginCount, isLoggedIn){
    this.username =       username
    //above is varibale  & above is whichwe pass
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    //methods
    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }
    return this
}

const userOne = new User("Rakesh",5,true,)
const userTwo = new User("Rak",5,true)

console.log(userOne);
console.log(userTwo);


//with new keyword empty object creation 
//constructioon function call becaosuse of new keyword
// this keyword inject everything argument 
// then we will get into function 