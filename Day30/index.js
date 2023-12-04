console.log("Hello ji kaise ho sare");

//integer
let a= 5;
console.log(a);

//boolean
let b= true;
console.log(b);

//string
let c = "babbar";
console.log(c);


//dynamic typing
let lastname = 'Abhishek';
console.log(lastname);

lastname =14;
console.log(lastname);

//---------

//Airthmetic operator

console.log(3+4);//add
console.log(3*4);//mul
console.log(6-4);//sub
console.log(6/4);//divide
console.log(6%3);//module
console.log(2**10);//exponential

//prepsot increment/decrement operator
let v =10;
//pre increment -> first increment then used
console.log(++v);

//post increment -> first used then increment
console.log(v++);
console.log(v);

//pre decrement -> first decrement then used
console.log(--v);

//post decrement -> first used then decrement
console.log(v--);
console.log(v);


// comparision operator

console.log(2<3); // grater
console.log(2>3);//less
console.log(2>=3);//less than equal to
console.log(2<=3);//greater than equal to
console.log(2===2); //strict equality
console.log(2!==3);//not equal to


//ternary operator
let age = 18;
let status = (age>=18)?'I can vote ':'cannot vote';
console.log(status);


//if one is ture then it would be true;
console.log(true || false);
console.log(true || true);
console.log(false || 'aAbhi');

//if both true than is true
console.log(true && false);
console.log(true && true);
console.log(false && 'aAbhi');

//bitwise operator
//logical & -> both true -> 1
console.log(2&3);
//logical | -> any one true -> 1 
console.log(2|3);

//****control statement*********

//if-else statement
let marks =38;

if(marks>=90)
{
    console.log('A');
}
else if(marks>=80)
{
    console.log('B');
}
else if(marks>=70)
{
    console.log('C');
}
else{
    console.log('You are fail moye moye');
}

//switch case statement
let day = 3;
switch(day){
    case 1:console.log('Sunday');
    break;
    case 2:console.log('Monday');
    break;
    case 3:console.log('Tuesday');
    break;
    case 4:console.log('wednesday');
    break;
    default:console.log("Moye moye");
}
 

//loops

//for loops ->
for(let i=0;i<=5;i++)
{
    console.log(i);
    console.log('Moye Moye');
}

//while loop
let j =0;
while(j<=10){
    console.log('Jai shree ram |.-^-.|');
    j++;
}

//Do while loop
let k =0;
do{
    console.log("Hare krishna |^|");
    k++;
}while(k<8);
