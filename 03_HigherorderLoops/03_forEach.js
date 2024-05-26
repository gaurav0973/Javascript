//forEach loop
const coding = ["js", "ruby", "python", "cpp"]


/*
argument taken by forEach loop will be caallback function
-> function withourt name is callback function
-> () -> bracket me jo hoga vo iterator ki tarah kaam karega  jisko hum kuch bhi naam de sakte hai
*/

// Variation-1
coding.forEach(  function  (item) {
   // console.log(item);
})

// variation-2
coding.forEach( (val) => {
    //console.log(val);
}    )

// variation-3
function printMe(item){
    //console.log(item);
}
coding.forEach(printMe);


// variation-4
coding.forEach(   (item, index, arr)=>{
    //console.log(item , index, arr);
})


//variation-5
//[{}, {}, {}, {}] -> very important iteration using forEach Loop in array of objecs
const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
];

myCoding.forEach(   (item)=>{
        console.log(item.languageName, item.languageFileName);
})