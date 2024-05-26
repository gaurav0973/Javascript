const myObject = {
    js : "javascript",
    cpp : "c++",
    rv : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
    // console.log(myObject[key]);
}

for(const key in myObject){
    // console.log(`${key}  -> ${myObject[key]}`)
}




//is this forin loop work on the array --> YES for sure it will
const programming = ["js", "cpp"];

for(const key in programming){
    console.log(key); // this will print the key 
}
for(const key in programming){
    console.log(programming[key]); // this will print the value
}


// ❌❌always use forin loop when there is object jaha kahi bhi



