const coding = ["js", "ruby", "python", "cpp"]

coding.forEach(   (item)=>{
        //console.log(item);
})

//❌❌INTERVIEW QUESTION
//forEachh loop does not returen anything -> undefined
//in order to do so , we have to create an empty array first and then push elements in that after each iterations when the condition is satisfied

const values = coding.forEach(   (item)=>{
        // console.log(item);
})
// console.log(values);



const myNums = [1,2,3,4,5,6,7,8,9,10]

/*
❌FILTER ❌❌❌❌INTERVIEW QUeSTION
filter bhi apne andar call back function hi leta hai
-> vaha par harr value ko excess kiya jayega uske baad deni padti hai conditions 
-> jo condition ko satisfy karega vo vo values return hongi
*/

let newNums = myNums.filter( (num)=> (num > 4)  )
//console.log(newNums);


// this will returns the empty arrray because humne scope laga diya hai , so ve have to use the return keyword in order to retuen something
const newNumss = myNums.filter( (num)=>{
    num>4
}  )
console.log(newNumss);

const newNumsss = myNums.filter( (num)=>{
    return num>4
}  )
console.log(newNumsss);







