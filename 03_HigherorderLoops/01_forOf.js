//  for of -> loop
// ["", "", ""]
// [{}, {}, {}] // object in the array


//1. on the array
const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}


//2. on the strings
const greetings = "Hello Bhai";
for(const greet of greetings){
    // console.log(greet);
}

//3. Maps -> holds key-value pairs and remembers the original order of the keys 
const map = new Map();
map.set("IN", "INDIA");
map.set("USA", "United State Of America");
map.set("Fr", "France");
console.log(map)

for (const [key, value] of map) {
    //console.log(key, ":- ", value);
}


//4. on objects 
const myObj = {
    'game1' : 'NFS',
    'game2' : 'SpiderMan',
}

//cannot be itratable
for (const [key,value] of myObj) {
    console.log(key, ":- ", value);
}