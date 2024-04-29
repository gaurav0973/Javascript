const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

//1. ab hum strings me kyo karenge bhala -> due to the properties of the string
console.log(balance.toString());
console.log(balance.toString().length);

//2.toFixed(2) -> decimal ke baad kitne digit dekhna cahte ho aap 
console.log(balance.toFixed(2));

//3.toPricision(3) ->very important concept to know
const otherNumber = 23.9696
console.log(otherNumber.toPrecision(2));
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(1));

//4. toLocalString() 
const hundreds = 1000000
console.log(hundreds.toLocaleString()); //US standerd
console.log(hundreds.toLocaleString('en-IN')); //US standerd






//++++++++++++Maths+++++++++++++++++++++++++
console.log((Math));
console.log((Math.abs(-4)));
console.log((Math.round(4.6)));
console.log((Math.ceil(4.3)));
console.log((Math.floor(4.6)));


//important use case
console.log("Importannt usecase");


console.log(Math.random()); //values 0/1 ke dich me aayengi
console.log(Math.random()*10); //0 - 9 kw bich me aayengi
console.log((Math.random()*10) + 1);  // values 1 - 9 ke bich me aayngi



//important concept
const min = 10
const max = 20


//why +1 => in order to avoid the condition of zero
const num = (Math.random()*(max-min+1)) + min
console.log(Math.floor(num));