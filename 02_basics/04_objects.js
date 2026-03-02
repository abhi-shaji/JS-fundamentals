const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Anil"
tinderUser.isLogggedIn = true

// console.log(tinderUser);


const regularUser = {
    email: "abhinav@aa.com",
    fullName: {
        userFullName: {
            firstName: "Abhinav",
            lastName: "Shaji"
        }
    }
}

// console.log(regularUser.fullName.userFullName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:2,
        email:"b@gmail.com"
    },
    {
        id:3,
        email:"c@gmail.com"
    }
]

// console.log(users[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}


// course.courseInstructor

const {courseInstructor: instuctor} = course
console.log(instuctor);

