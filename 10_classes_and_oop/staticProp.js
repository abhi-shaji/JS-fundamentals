class User {
    constructor (username) {
        this.username = username
    }
    logMe () {
        console.log(`Username ${this.username}`);
    }
    static createId () {
        return `123`
    }
}

const abhinav = new User("Abhinav")
console.log(abhinav.createId());


//Static function cannot be accessed by instance of classes