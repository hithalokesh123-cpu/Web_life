//1.import cars
// let toys = require('./China')
// console.log(toys)                                         //remote control car



//2.import function
// let print=require('./China')
// print()


//3.import both toys and function using two export module statement
// let toys = require('./China')
// let print= require('./China')
// print()                    //Welcome to china
// console.log(toys)          //[Function: print]  bcz it overidden the toys and return function 
//                                                //due to in china js file mention module exports 
                                               //first=toys ,second =function last one will exceute 


//4.import both should display toys and function 
// let anything = require('./China')
// anything.print()
// console.log(anything.toys)



//5.Using desturing import both should display toys and function 
// let {print,toys} = require('./China')
// print()
// console.log(toys)

// let {print:p,toys:t} = require('./China')
// p()
// console.log(t)



//6.import object 
//import both emplyeeinfo and userinfo
// let person=require('./China')
// console.log(person.employeeinfo)         //{ empid: 'E103', sal: 25000, designation: 'manager' }
// console.log(person.userinfo)             //{ name: 'janu', location: 'bangalore', age: 25 }