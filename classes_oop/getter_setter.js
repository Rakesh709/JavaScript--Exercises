class User{
    constructor(email,password){
        this.email= email
        this.password= password
    }


//in getter return in complusary because he need to return somethig
    get email(){
        return this._email.toUpperCase()
    }

    //value is imp bacause we need to sett the value 
    set email(value){
        this._email = value
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}Rakesh`
    }
    set password(value){
        this._password= value
    }
}



const rakesh = new User("rakesh.ai","abc")
console.log(rakesh.password);
console.log(rakesh.email);
