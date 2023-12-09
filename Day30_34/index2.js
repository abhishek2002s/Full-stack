//IN built object


//Math object ********
console.log(Math.random()); //->Random (0-1)
console.log(Math.round(1.4));// -> 1
console.log(Math.max(2,3,4));// ->4
console.log(Math. min(2,3,4));// ->2
console.log(Math.abs(-2));// -> 2


//String object *************
let lastName = ' Soni ';
// console.log(lastName.length);
// console.log(lastName[3]);
// console.log(lastName.includes('So'));
// console.log(lastName.endsWith('ni'));
// console.log(lastName.toUpperCase());
// console.log(lastName.trim());
// console.log(lastName.replace('So','CA'));

// let firstName = new String('abhishek');
// console.log(firstName.toUpperCase());

// let message = 'This is my first Message';
// let words = message.split(' ');
// console.log(words);

//Template literal **************
let mes = `This is ${lastName}

i started web development.

Mentor is -> Babbar.
 From-Abhishek`;
console.log(mes);

//Date and time ************\
let date = new Date();
console.log(date);

let date2 = new Date('June 20 1998 07:15');
console.log(date2);

let date3 = new Date(1998, 6, 20, 7);
console.log(date3);
date3.setFullYear('1989');
console.log(date3);