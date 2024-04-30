//dates

let myDate = new Date() //object
console.log(myDate); //2024-04-30T16:34:39.689Z
console.log(myDate.toString()); //Tue Apr 30 2024 16:35:42 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Tue Apr 30 2024
console.log(myDate.toLocaleDateString()); //4/30/2024
console.log(myDate.toLocaleString()); //4/30/2024, 4:38:50 PM
console.log(myDate.toLocaleTimeString()); //4:39:29 PM


//✍️✍️✍️Date is an object
console.log(typeof Date);
console.log(typeof Date());
console.log(typeof myDate);
/////////////////////////////////

let myCreateddate = new Date(2024,3,30);
console.log(myCreateddate.toDateString());

//to be continued