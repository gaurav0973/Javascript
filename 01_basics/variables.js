const accountId = 153
let accountEmail = "maurya.gmail.com"
var accountPassword = "1234"
accountCity = "Varanasi"
let accountState;

//accountId = 2 --> cannot be assigned as it is declared constant
accountEmail = "abd@gmail.com"
accountPassword = "4y30"
// console.log(accountPassword);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])



/*
INTERVIEW ✍️✍️✍️Prefer not to use var --> because of the issue in block scope and functional scope
1. Use const and let for the variables
2. if variables are declared but it is initialised then the variable is undefined
3. use of console.table([]) --> 
4. if we have not used const and let but declared and initialised the variable, it is valid here but it is not a good practice
*/