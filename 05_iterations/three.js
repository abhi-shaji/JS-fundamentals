// for of

//[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const element of arr) {
    // console.log(element);
}

const greeting = "Hello World"

for (const element of greeting) {
    // console.log(element);
}



//Maps

const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"United States Of America")
map.set("FR", "France")
// console.log(map);

for (const [key, value] of map) {
    console.log(key);
    console.log(value);
}


// const myGame = {
//     game1: "NFS",
//     game2: "Forza"
// }

// for (const element of myGame) {  //For Of cannot iterate objects
//     console.log(element);

// }