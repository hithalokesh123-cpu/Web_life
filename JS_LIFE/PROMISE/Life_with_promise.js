//^ Creating Promise
//* exceutor function=> automatically exceute the function without calling the function
// new Promise((resolve,reject)=>{
//     console.log("I am inside the exceutor function...") 
// })


//^create the variable to store the function ,promise function accept two parameter(resovle,reject)
//& resolve()
// let myPromise=new Promise((resolve,reject)=>{
//     console.log("I am inside the exceutor function...") 
//     resolve("Data is succesfully received")
// })
// console.log(myPromise)                         //~I am inside the exceutor function...
                                               //~Promise { 'Data is succesfully received'}

//& reject()
// let myPromise=new Promise((resolve,reject)=>{
//     console.log("I am inside the exceutor function...") 
//     reject("Data is not received")
// })
// console.log(myPromise)                           //~I am inside the exceutor function...
                                                //~ Promise { <rejected> 'Data is not received' }
                                                //! node:internal/process/promises:392
                                                //! new UnhandledPromiseRejection(reason);

//^Handling promise
//* we have two ways to handle promise
//* 1. Traditional way (.then() and .catch())
//& then()
// let myPromise=new Promise((resolve,reject)=>{
//     console.log("I am inside the exceutor function...") 
//     resolve("succesfully received")
// })
// console.log(myPromise)  
// myPromise.then((success)=>{
//     console.log(success)                                //~I am inside the exceutor function...
// })                                                      //~Promise { 'succesfully received' }
                                                           //~succesfully received              


//& catch()
// let myPromise=new Promise((resolve,reject)=>{
//     console.log("I am inside the exceutor function...") 
//     reject("Failure")
// })
// console.log(myPromise)  
// myPromise.catch((Failure)=>{
//     console.log(Failure)                                //~I am inside the exceutor function...
// })                                                      //~Promise { <rejected> 'Failure' }
                                                        //~Failure
