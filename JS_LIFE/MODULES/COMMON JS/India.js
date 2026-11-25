//import cars

// let toys = require('./China')
// console.log(toys)                                         //remote control car

//import function
// let print=require('./China')
// print()


//import both toys and function using two export module statement
// let toys = require('./China')
// let print= require('./China')
// print()                    //Welcome to china
// console.log(toys)          //[Function: print]  bcz it overidden the toys and return function 
//                                                //due to in china js file mention module exports 
                                               //first=toys ,second =function last one will exceute 


//import both should display toys and function 
// let anything = require('./China')
// anything.print()
// console.log(anything.toys)

//Using desturing import both should display toys and function 
// let {print,toys} = require('./China')
// print()
// console.log(toys)

// let {print:p,toys:t} = require('./China')
// p()
// console.log(t)



//import object 
//import both emplyeeinfo and userinfo
// let person=require('./China')
// console.log(person.employeeinfo)         //{ empid: 'E103', sal: 25000, designation: 'manager' }
// console.log(person.userinfo)             //{ name: 'janu', location: 'bangalore', age: 25 }