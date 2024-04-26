// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);



/* AVOID SUCH TYPE OF COMPARISION */
// console.log("2" > 1);   // true
// console.log("02" > 1); // true 
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

/*
✍️✍️✍️INTERVIEW
-> equality check (==) and comparision (> , <, >=, <=) works differently in Javascript
-> comparision converts null to a number, treating null to be zero
-> hence (null >= 0) -> true 
              (null > 0) -> false
 */
/***************************** */


//strict check => value as well as dataType
console.log("2" == 2);
console.log("2" === 2);

