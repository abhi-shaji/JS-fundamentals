class User {
    constructor (username) {
        this.username = username
    }
    logMe () {
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username,email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const teacher1 = new Teacher("Abhi","Abhi@g.vom", 1234)
teacher1.addCourse()
teacher1.logMe()

const user1 = new User("Shaji")
user1.logMe()

console.log(teacher1 instanceof Teacher);
console.log(teacher1 instanceof User);
