 //Array ******
//  let numbers = [1,3,4,5,7];
//  console.log(numbers);
//  console.log(numbers[0]);

 //insertion ***********

//  // Insertion at the end
//  numbers.push(9);
//  console.log(numbers);

//  //insert at the begining
//  numbers.unshift(8);
//  console.log(numbers);

//  //middle
//  numbers.splice(2,0,'a','b','c');
//  console.log(numbers);


//searching

//for primitive *******
// console.log(numbers.indexOf(5));

// //we want to check if a number exist in an array
// console.log(numbers.includes(7));
// console.log(numbers.indexOf(2,4));


//for reference  **************
// let courses = [
//     {no:1, naam : 'Abhi'},
//     {no:2, naam:'Ram'}
// ];
// let course = courses.find(function(course){
// //     return course.naam == 'Ram';
// // })

// //*******using arrow function ***************
// let course = courses.find(course => course.naam == 'Abhi');

// console.log(course);

//remove element********

// let numbers = [1,3,4,5,6,7];
// //original array is :
// console.log(numbers);
// //delete  from end
// numbers.pop();
// console.log(numbers);

// //delete from begining
// numbers.shift();
// console.log(numbers);

// //delete from middle
// numbers.splice(2,1);
// console.log(numbers);



// empty an array *************
// let numbers = [1,2,3,4,5];
// let numbers2 = numbers;
// // numbers = []; -> bad practice
// // numbers.length = 0;// good practice
// numbers.splice(0,numbers.length);// good practice
// console.log(numbers);
// console.log(numbers2)

//combining an array *************
// let arr1 = [1,2,3,5];
// let arr2 = [4,6,7,8];

// let combine = arr1.concat(arr2);
// console.log(combine);

// //slicing an element ***********

// let slice = combine.slice(2,6);
// console.log(slice);


//Reducing an array
let arr = [1,2,3,4];
let total = 0;


for(let value of arr)
    total += value;

console.log(total);


let totalsum = arr.reduce((accumulator,currrentValue)=> accumulator + currrentValue,0 );
console.log("printing the sum is :");
console.log(totalsum);


