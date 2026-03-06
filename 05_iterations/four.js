const myObject = {
    js: 'javascript',
    cpp:'C++',
    rb:"ruby",
    swift:"swift by apple"
}

//forin 

for (const key in myObject) {
    // console.log(`file name is ${key} and full name is ${myObject[key]}`);
}

const programming = ["js", "ruby", "c++", "python"]

for (const key in programming) {
    // console.log(programming[key]);
}

const myString = "abcdef"

for (const key in myString) {
        // console.log(myString[key]);
}

// const map = new Map()
// map.set('IN',"INDIA")
// map.set('USA',"United States Of America")
// map.set("FR", "France")

// for (const [key] in map) {   // For in loop is not applicable for map
//     console.log(key);
// }