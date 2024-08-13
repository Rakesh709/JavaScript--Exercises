class User{
    constructor(username){
        this.username= username;
    }

    logMe(){
        console.log(`Username is ${this.username}`); 
    }

    //when no need to give access to everyone
    static createId(){
        return `123`
    }

}

//const rakesh = new User("Rock")
// console.log(rakesh.createId());


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone","i@phone.com")
console.log(iphone.createId())
