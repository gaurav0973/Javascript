const marvalHeros = ["thor" , "Ironman", "spiderman"]
const dcheros  = ["superman", "flash", "batman"]

// marvalHeros.push(dcheros) //--> at the last entire array will be pushed
// console.log(marvalHeros);
// console.log(marvalHeros[0]);
// console.log(marvalHeros[1]);
// console.log(marvalHeros[2]);
// console.log(marvalHeros[3]);
// console.log(marvalHeros[3][0]);


// proper elementn by element copying will  be done
const allHeros = marvalHeros.concat(marvalHeros)
// console.log(allHeros);


//this method is called SPREAD OUT METHOD having three dots
const allNewHeros = [...marvalHeros, ...dcheros]
// console.log(allNewHeros);



//array  inside another array, simply use flat(Infinity) method to convert theem into a single array 
const anotherArr = [1,2,3,[4,5,6], 7,[5,8,9]]
// console.log(anotherArr);
const realAnotherArr = anotherArr.flat(Infinity)
// console.log(realAnotherArr);


//IMPORTANT✍️✍️✍️
console.log(Array.isArray("gaurav"));
console.log(Array.from("gaurav"));
console.log(Array.from({name : "gaurav"}));  //🤯Intresting

const a = 18
const b =39
const c = 89
console.log(Array.of(a,b,c));
