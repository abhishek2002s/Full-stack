console.log('chalie bhai suru krte hai');

//**************object create **********
// let rectangle = {
//     length:1,
//     breadth:2,

// // behaviour function
// draw:function() {
//     console.log('AAiye bahiya ji');
// }

// };



//***********factory function *************
// function createRectangle(len,bre){

//     return rectangle = {
//         length:len,
//         breadth:bre,
    
//     //function
//     draw() {
//         console.log('AAiye bahiya ji');
//     }
    
//     };
// }

// let rectangleObj1 = createRectangle(6,7);

// // ex...
// // function greet()
// // {
// //     return greet = {
// //         Foreign : 'hello world',
// //         india : 'Namste',

// //         meme(){
// //             console.log('Moye Moye');
// //         }
// //     };
// // }

// // let g1 = greet();

// //ex...
// function calci(a,b)
// {
//     return calc = {
//         multiply : a*b,
//         exponent : a**b,

//         meme(){
//             console.log('Moye Moye');
//         }
//     };
// }

// let cal = calci(5,6);


// ********* constructor function *************
// it work with PascalNotation

// function Rectangle(len,bre){
// this.length = len;
// this.breadth =bre;
// this.draw = function(){
//     console.log('Drwaing')
// }
// };

// Rectangle.name;
// //object creation using constructor function
// let Rectangleobj = new Rectangle(5,6);

// // //dynamic nature object*******
// // Rectangleobj.color = 'yellow';
// // console.log(Rectangleobj);

// // delete Rectangleobj.color;
// // console.log(Rectangleobj);



// let Rectangle1 = new Function('length', 'breadth',
// `this.length = length;
// this.breadth =breadth;
// this.draw = function(){
//     console.log('Drwaing')
// }`);

// //object creation rectangle1;
// let rect = new Rectangle1(2,3);

// console.log(rect);

//function as a object::******

// function Rectangle(len,bre){
//     this.length = len;
//     this.breadth =bre;
//     this.draw = function(){
//         console.log('Drwaing')
//     }
//     };
    
//     Rectangle.name;
//     //object creation using constructor function
//     let Rectangleobj = new Rectangle(5,6);


//difference between primitive type and refrence type ***;

//primitive type;
// let a = 10;
// let b =a;
// a++;
// console.log(a);
// console.log(b);


// //refrence type::
// let c = {value:10};
// let d = c;

// c.value++;

// console.log(c.value);
// console.log(d.value);

// Eg
// let a = 10;

// //value -> copy
// function inc(a)
// {
//     a++;
// }
// //not effect in this a -> 10;
// inc(a);
// console.log(a);

// Eg
// let a = {value:10};

// function inc(a){
//     a.value++;
// }
// inc(a);
// console.log(a);


//for in and out loop *********** ::

// let rectangle = {
//     length:2,
//     breadth:4
// };

// //for in loop
// for(let key in rectangle){
//     console.log(key,rectangle[key]);
// }

// //for of loop
// for(let key of Object.entries(rectangle)){
//     console.log(key);
// }

// if('color' in rectangle){
//     console.log('present');
// } 
// else{
//     console.log('absent')
// }


//object cleaning*****

//insertion **************
// let src = {a:10,
// b:20,
// c:30
// };

// let dest = {};

// for(let key in src){
//     dest[key] = src[key];
// }

// console.log(dest);

// src.a++;
// console.log(dest);

//assign object ***********
// let src = {
//     a:10,
//     b:20,
//     c:30
// }; 

// let src1 = {value:30};

// let dest = Object.assign({},src,src1);
// console.log(dest);
// src.a++;
// console.log(dest);


// spread *****************
let src = {
    a:10,
    b:20,
    c:30
};

let dest = {...src};
console.log(dest);
src.a++;
console.log(dest);

