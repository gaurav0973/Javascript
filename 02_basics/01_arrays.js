/*
✍️✍️✍️INTERVIEWS
Array-copy operation creates shallow copy
1. Shallow copy -> share same reference point
2. deep copy -> does not share same reer4nce point
*/

//type 1 -> decleration
const myArr = [0,1,2,3,4,5]
// const myHeros = ["Shaktimaan", "Naagraj"]

// //type 2 -> decleration
// const myArr2 = new Array(1,2,3,4,5);
// // console.log(myArr[0]);


// //array methods
// // console.log(myArr);
// myArr.push(6);  // push -> adding in the last
// console.log(myArr);
// myArr.push(7); 
// console.log(myArr);
// myArr.pop() // pop -> removing from the last
// console.log(myArr);


/*
✍️✍️✍️shift and unshift 
shift() and unshift() are methods that can be used with arrays to manipulate the elements in the beginning of the array.
1. shift() removes the first element from an array and returns that removed element.
2. unshift() adds one or more elements to the beginning of an array and returns the new length of the array
*/

//include(x) --> boolean --> present or not by passsing eleemnt
// indexOf(x) --> gives the index of the element if not present then it will give -1


// join() --> convert an array into string => The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array
// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);



//✍️✍️✍️INTERVIEW => slice , splice
/*
1. slice(start , end not included) -> original array is not changes
2. splice(start , end included) -> original array is changed
*/

console.log("A => ", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B => " , myArr);


const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C => " , myArr);


