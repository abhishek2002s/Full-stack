 //Array ******
 let numbers = [1,3,4,5,7];
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
let courses = [
    {no:1, naam : 'Abhi'},
    {no:2, naam:'Ram'}
];
// let course = courses.find(function(course){
//     return course.naam == 'Ram';
// })

//using arrow function 
let course = courses.find(course => course.naam == 'Abhi');

console.log(course);

