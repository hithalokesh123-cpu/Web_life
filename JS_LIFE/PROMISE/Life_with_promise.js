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


//^##################   modern approach (async and await)  ############################
//resolve
// let myPromise=new Promise((resolve,reject)=>{
//     console.log("I am inside the exceutor function...") 
//     resolve("succesfully received")
// })
// async function HandlingMyOwnPromise(){
//     let  res = await myPromise
//     console.log(res)
// }
// HandlingMyOwnPromise()


//*reject => can be handled using try and catch()
// let myPromise=new Promise((resolve,reject)=>{
//     console.log("I am inside the exceutor function...") 
//     reject(" Failed to received")
// })
// async function HandlingMyOwnPromise(){
//       try{
//         let  res = await myPromise
//          console.log(res)
//       }
//       catch(err){
//            console.log(err)
//       }
// }
// HandlingMyOwnPromise()


//TumbOn
// let thumb=false
// let myPromise=new Promise((resolve,reject)=>{
//     if (thumb == true){
//         resolve("Employee can login succesfully")
//     }
//     else{
//         reject("Employeee is failed to login")
//     }
// })
// async function HandlingMyOwnPromise(){
//        try{
//         let  login_status = await myPromise
//          console.log(login_status)                           //~true => Employee can login succesfully
//       }
//       catch(err){
//            console.log(err)                                 //~false => Employeee is failed to login
//       }
     
// }
// HandlingMyOwnPromise()


//^ cafe
function orderfood(){
    return new Promise((resolve)=>{
         setTimeout(()=>{
         console.log("Food is ordered")
         resolve()
        },2000)
    })
 }


function prepared(){
     return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("food is prepared")
            resolve()
        },3000)
     })
    }

function takeaway(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("food is ready to take away")
            resolve()
        },2000)
    })
}

//!callback hell problem
// orderfood(()=>{
//     prepared(()=>{
//             takeaway(()=>{
//             console.log("THank you for your order")
//            })
//        })
//     })

//*handling in the traditional way using then() and catch() for the callback hell problem
// orderfood().then(()=>{
//     return prepared()
// }).then(()=>{
//     return takeaway()
// }).then(()=>{
//     console.log("enjoy your meal")
// })

//*handling in the modern approach way use (sync and  await) for the callback hell problem
async function HandlingMyOwnPromise(){
       await orderfood()
       await prepared()
       await takeaway()
       console.log("Enjoy you meal")
}
HandlingMyOwnPromise()
