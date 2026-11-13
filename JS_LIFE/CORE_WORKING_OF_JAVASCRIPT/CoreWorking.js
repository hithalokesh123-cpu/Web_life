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

//Example 3
// var x=5
// function display(){
//     console.log(x)
//     var x=15
// function show(){
//     console.log(x)
// }
// show()
// }
// display()

//EXAMPLE 4
// var a=10;
// function test(){
//     console.log(a)

//     let a=20

//     console.log(a)
// }
// test()

//EXAMPLE 5 
var x=100
function first(){
    console.log(x)                                                  //undefined
    
    var x=200
    
    function second(){
        console.log(x)                                               //undefined
        
        var x=300
        console.log(x)                                                   //300
    }
    second()
    console.log(x)                                                       //200
}
first()
console.log(x)                                                           //100
