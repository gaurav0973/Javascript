const myNums = [1,2,3];


// const myTotal = myNums.reduce(function( accumilator, currVal){
//     console.log(`acc : ${accumilator} and currVal ${currVal}`);
//     return accumilator + currVal
// }, 0)
// console.log(myTotal);

const myTotal = myNums.reduce(  (acc, currVal)=>(acc + currVal), 0)