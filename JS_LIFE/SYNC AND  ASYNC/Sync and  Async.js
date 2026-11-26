//^ ##################  Sychrouous code excection #################3
// console.log("program starting")
// console.log("program mid")

// for(i=0;i<5677;i++){console.log("loding...")}             //! takes up exceution time in call stack

// console.log("Dealing with impdata")
// console.log("program ended")

//***output**
// program starting
// loading...
// loading...
// loading...
// ...(long time)
// dealing with impdata
// program ended


//^ ############ Asychronus code execution ################
// console.log("program starting")
// console.log("program mid")
// function handlingData(){
       // for(i=0;i<55677;i++){console.log("loding...")}

//        console.log('Done with program')
// } 
// handlingData()
// console.log("Dealing with impdata")
//  console.log("program ended")


//*** output ***
// program starting
// program mid
//loading...
//loading...
//loading...
//(long time waiting)
// Dealing with impdata
// program ended

//^ TIMER FUNCTION 
//################### timer apis #####################
// ^ ----- setTimeout() ----
// console.log("program starting")
// console.log("program mid")
// function handlingData(){
//        console.log('done with the program')
// }
// setTimeout(handlingData,(5000))
// console.log("Dealing with impdata")
// console.log("program ended")

//& *** output ***
// program starting
// program mid
// Dealing with impdata
// program ended
//!wait for (5sec) then print
//done with the program

//* setTimeout(3000) & setTimeout(5000)
// console.log("program starting")
// console.log("program mid")
// function handlingData(){
//        console.log('done with the program')
// }
// setTimeout(handlingData,(5000))                               //2nd execute
// setTimeout(handlingData,(3000))                               // 1st execute
// console.log("Dealing with impdata")
// console.log("program ended")

//**output */
// program starting
// program mid
// Dealing with impdata
// program ended
// !wait for(3s)
// done with the program
// !wait for (1sec)
// done with the program


//^ ----- setInterval() -------
// console.log("program starting")
// console.log("program mid")
// function handlingData(){
//        console.log('done with the program')
// }
// setInterval(handlingData,2000)
// console.log("Dealing with impdata")
// console.log("program ended")

//*output
// program starting
// program mid
// Dealing with impdata
// program ended
// !wait (2s)
// done with the program
// !wait(2s)
// printing repeatedly.....
// until we stop it by ctrl+c


//^ ----- clearTimerout() => to stop the setTimeout()-----
// console.log("program starting")
// console.log("program mid")
// function handlingData(){
//        for(i=0;i<111;i++){console.log(i)}
//        console.log('done with the program')
// }
// clearTimeout(handlingData)
// setTimeout(handlingData,5000)
// console.log("Dealing with impdata")
// console.log("program ended")

//*output
// program starting
// program mid
// Dealing with impdata
// program ended
//wait (5s) ,after  for loop execute,immediately execute
//done with the program 


//^---- clearInterval