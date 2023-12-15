//scopes in javascript *************


// function walk()
// {
//     var a =5;
// }

// console.log(a);

//var keyword is used to acccess outside the function
// for(var i=0;i<5;i++){

// }

// console.log(i);


//ex :::
// function a(){
//     const a =5;
// }

// function b(){
//     const a   =5;
// }


//sort an array 
let a = [10,30,2,6,8,5];
a.sort(function(a,b){
    return a-b;
});

console.log(a);