/*
singleton 
1. object litrals ki tarah declarre karte hai to singleton nahi banta hai
2. construcor s banayenge to singleton banega --> Object.create()
*/


//object literals
//objects --> {key : value} 


//declaration of the symbol 
const mySym = Symbol("key1")

const jsUser = {
    name : "gaurav",
    [mySym] : "myKey1",
    age : 20,
    location : "varanasi",
    email : "abds@gmail.com",
    isLoggedIn : false,
    lasstLoggedInDays : ["Monday", "Saturday"]
}




//accessing the objects
// console.log(jsUser.email);
// console.log(jsUser[email]); --> this is wrong 
// console.log(jsUser["email"]);  //-> why this way, because internally key is treated as string


/*
✍️✍️✍️INTERVIEW
using symbol inside a object
1. declare a symbol as usual 
2. inside the object write the variable for the symabol in squre bracket and use thiis square barcket further for the symbol
*/
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);


jsUser.email = "maurya@gogle.com"
console.log(jsUser);

//freezing an object so that no further changes are alloud
// Object.freeze(jsUser)
jsUser.email = "maurya@microsoft.com"
console.log(jsUser);


//functions can be treated as a variable in JS
jsUser.greeting = function(){
    console.log("Hello Kya haal chaal");
}

console.log(jsUser)
console.log(jsUser.greeting); // this will retuens the referance of the function