const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNumbers.map(  (num)=> num + 10);
// console.log(newNums);



// ❌❌❌CONCEPT OF CHAINING -> INTERVIEW QUESTION
/*
map and filter can be chained ek saath  
*/
const newNums = myNumbers
.map(  (num)=> num*10) //1❌ -> 1*10 = 10 
.map(   (num)=> num+1 ) //upar wale map ka jo bhi result hai jo niche wale ko pass ho jayega 
console.log(newNums);