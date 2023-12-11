//spread operator in an array **********

// let first = [1,2,3,4];
// let second = [4,5,6,7];
// let combined = [...first,'a',...second,'s'];
// console.log(combined); 


//iterating in an array ***********
// let  arr = [10,20,40,50];

//for of *************
// for(let value of arr){
//     console.log(value);
// }



//for each value ********
// arr.forEach(function(number){
//     console.log(number);
// })
//using arrow function ***********
// arr.forEach(number => console.log(number));

//joining an array ********
// let numbers = [10,20,30,40,50];
// const  joined = numbers.join(',');
// console.log(joined);

// let message = "This is my first message";
// let parts = message.split(' ');
// console.log(parts);

// //sort the array *******
// let number = [10,50,20,30,70,40,45];
// number.sort();
// console.log(number);

//filtering an array **************
// let number = [1,2,-1,-4];
// // let filtered = number.filter(function(value){
// //     return value >= 0;
// // });
// //arrow function 
// let filtered = number.filter(value => value >= 0
// );
// console.log(filtered);

//mapping array *****************
// let number = [7,8,9,10];
// let item  =  number.map(value  => 'student_no' + value
// );

// console.log(item);

//mapping with object ***********
let numbers = [1,2,-6,-9];
// let filtered =numbers.filter(value => value >= 0);

// let items = filtered.map(num => {value:num});
// console.log(items);

//chainning methods *****************

let items = numbers.filter(value => value >= 0).map(num => {value:num});
console.log(items);

