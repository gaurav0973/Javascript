let score = "gaurav"
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber); // NaN => this is not a number 
console.log(typeof NaN);

/*
converting into the Number **N in number will be capital
"33" => 33
"33abc" => NaN
"true" => 1
"false" => 0
null => 0
undefined => NaN
"gaurav" => NaN
NOTE => type of NaN is number
*/


let isLoggedIn = "";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);


/*
Converting into the boolean
1 => true
0 => false
"" => false
"gaurav" => true
*/


let someNumber = 33
let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);

/*
Converting into the string
33 => "33"
*/
