//rest operator (parameter) ******

// function sum(num,value,...args){
//     console.log(args);
// }

// sum(1,2,3,4,5,6);


//default operator
function interest(p,r=5,y=10){ // r is a default parameter
    return p*r*y/100;
}

console.log(interest(100));

//gettter and setter
let person = {
    fname : "abhi",
    lname:"soni",
    
  get fullName(){
        return `${person.fname}   ${person.lname}`;
    },

    set fullName(value){
        if(typeof value !== string){
            throw new Error("you haove not sent a string");
        }
        let parts = value.split(' ');
        this.fname = parts[0];
        this.lname = parts[1];
           
    },
};

// //read only function:
//  function fullName(){
//     return `${person.fname} ${person.lname}`;
// }


//try and cathch :::::::::::
try{

    person.fullName =true;
}
catch(e){
  alert(e);
}
console.log(person.fullName);

