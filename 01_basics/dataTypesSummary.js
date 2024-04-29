/*On the basis of how data is stored in the memory and how we acces them data is catagorised in two ways
1. Premitive(call by value)
    7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
2. Non-premetive(reference type)
    Arrays, Objects, Functions

//https://medium.com/@allansendagi/dynamically-typed-and-statically-typed-languages-a07eb99a1bc8
Javascript is a dynamically typed language
*/

//arrays
let myHeros = ["shaktimaan", "Naagraj", "Hero"]

//objects
let myObj = {
    name : "Gaurav",
    age : 20,
}

//function treating as variable
let myFunction = function(){
    console.log("Kya haal hai");
}

//typeof operator => https://262.ecma-international.org/5.1/#sec-11.4.3






/****************MEMORY************ */
/*
1. stack memory => primitive => jo bhi variable humne declare kiya hai  uski ek copy milti hai
2. heap memory  => Non-primitive => hume reference milta hai , koi bhi change hume original value me hota hai
 */


//stack memory
let myName = "Gaurav"
let anotherName = myName
console.log(myName);
console.log(anotherName);