//Hoisting 
//in call stack reads one line of code also create  GRE(Global excecution context)

// GRE creates two phases creation phase and exceution phase
//creation phase--> only deals with memory allocation and variable and function declaration 
//Exceution phase

//**************** HOISTING ******************** */
//EXAMPLE 1
// console.log(data)            //undefined
// var data='somu'
// console.log(data)           //somu

//EXAMPLE 2
// console.log(data)            //ERROR initially it in the temporal zone
// let data='somu'
// console.log(data)           //somu

//EXAMPLE 3
// console.log(data)            //ERROR it is in temporal zone
// const data='somu'
// console.log(data)           //somu




//EXAMPLE 1
// console.log(data);                                       //1.undefined
// function print(){
//     console.log("print")                                //3.print
// }
// var data ="somu"
// console.log(data);                                       //2.somu
// print()


//EXAMPLE 2
// console.log(data);                                        //1.undefined
// function print(){
//      let name='rani'
//      console.log(data)                                   //3.somu
//      console.log(name)                                   //4.rani
// }
// var data ="somu"
// console.log(data);                                        //2.somu
// print()


//********EXAMPLE 3 ***************
// console.log(data);                                        //1.undefined
// let printFun=function print(){
//      let name='rani'
//      console.log(data)                                   //3.somu
//      console.log(name)                                   //4.rani
// }
// var data ="somu"
// console.log(data);                                        //2.somu
// printFun()

//EXAMPLE 4
// console.log(data); 
// printFun()                                        //TypeError: printFun is not a function
// var printFun=function print(){
//      let name='rani'
//      console.log(data)                                   
//      console.log(name)                                  
// }
// var data ="somu"
// console.log(data);                                        



//SCOPE OF VARIABLE 
 
                   // GLOBAL SCOPE 

// console.log(data);                                       
// function print(){
//      let name='rani'
//      console.log(data)          // WHERE ACCESS THE DATA FROM OUTSIDE THAT 'somu'                          
//      console.log(name)                                  
// }
// var data ="somu"                //GLOBALSCOPE
// console.log(data);                                   
// print()


                        //FUNCTION SCOPE 
// console.log(data);                                       
// function print(){
//      var name='rani'
//      console.log(data)               // function scope                                                         
// }
// print()
// console.log(name)                       //ReferenceError: name is not defined
// var data ="somu"                
// console.log(data);                                   

//Global Scope
let x=10
function print(){
    x=20
    console.log(x)            //20
}
print()
console.log(x)               //20

//it is not recommended 
//to write it is mandatory to declare the variable
//it wiil be act has global scope
 x=10
function print(){
    x=20
    console.log(x)            //20
}
print()
console.log(x)               //20