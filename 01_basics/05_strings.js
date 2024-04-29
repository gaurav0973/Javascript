const name = "Gaurav"
const repoCount = 50


//do not use such type of sring concatination 
// console.log(name + repoCount + " value");


//use the palceholder technique known as string interpolation
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);




//best method for the strings
const gameName = new String("gaurav");

console.log(gameName);
console.log(gameName[1]);
console.log(typeof gameName);
console.log(gameName.length);
console.log(gameName.toUpperCase()); // isne original value change nahi kiya hai due to premetive data type -> using the stack memory
console.log(gameName.charAt(3));
console.log(gameName.indexOf('r'));



//some more intresting methods of the string


//1. substring(start->inncluded, end->not included) -> negative values are not allowed
const gameNa = new String("gaurav-maurya");
const newGameNa = gameNa.substring(0,3);
console.log(newGameNa);


//2. similer to slice but we can use negative indexing concept
const anotherString = gameNa.slice(7, -1);
console.log(anotherString);

//3.trim  -> read documentation
const newStringOne = "        gaurav       "
console.log(newStringOne);
console.log(newStringOne.trim());

//4.replace
const url = "https://gaurav.com/gaurav%20maurya"
console.log(url);
console.log(url.replace('%20', '-'));

//5.split()








