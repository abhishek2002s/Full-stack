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

function Rectangle(len,bre){
this.length = len;
this.breadth =bre;
this.draw = function(){
    console.log('Drwaing')
}
}

//object creation using constructor function
let Rectangleobj = new Rectangle(5,6);

