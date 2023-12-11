//function &**************

//it would also work when we call top the function **
// run();

//function declaration **********
function run()
{
    console.log("runiing");
}

//function invoke *******
run();


//named function assignment
// let stans = function walk(){
//     console.log('walking');
// };
// stans();


//Anonnymous function assignment ********

// let stand2 = function(){
//     console.log('walking');
// };
// stand2();

//argument dynamic action ::
function sum(){
    let total = 0;
    for(let value of arguments)
    total = total + value;
    return total;
};

let ans = sum(1,2,3,4,5,6);
console.log(ans);


