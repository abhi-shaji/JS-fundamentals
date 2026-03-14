


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.abhinav = function () {    
    console.log("Abhinav is present in all objects");
}

// heroPower.abhinav()
// myHeros.abhinav()  //As method was injected to Object the abhinab method is available for both array and objects because js follows inheritance

Array.prototype.arrayAbhinav =  function () {
    console.log("Abhinav says hello");
}

// heroPower.arrayAbhinav()
// myHeros.arrayAbhinav() // As method was injected to Array the arrayAbhinav method is only available for arrays and will not be available for Objects

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

//Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)
// console.log(TeachingSupport.makeVideo);

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}


let myName = "Abhinav    "
myName.trueLength()