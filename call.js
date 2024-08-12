function setUserName(username){
    //complex db call
    this.username = username
}


function createUser(username,email,password){
    setUserName.call(this, username)
    //setUserName(username)
    //the above one is reference only not call
    //this.username = username
    //the above one i have outsource the task
    this.email= email
    this.password = password
}


const chai = new createUser("chai","chai@gmail.com",123)
console.log(chai);
