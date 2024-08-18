const User= {
    _email:'rakesh@gmail.com',
    _password: 'abc',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

//factory function Object

const tea = Object.create(User)
console.log(tea.email);
