//^ ##################  Sychrouous code excection ##################
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
//        for(i=0;i<1234567;i++){console.log(i)}
//        console.log('done with the program')
// }
// let timeid=setTimeout(handlingData,5000)
// clearTimeout(timeid)
// console.log("Dealing with impdata")
// console.log("program ended")

//*output
// program starting
// program mid
// Dealing with impdata
// program ended
//no function execution  


//^---- clearInterval() --------  
// console.log("program starting")
// console.log("program mid")

// let interval =setInterval(()=>{
//        console.log("program...")
// },1000)
// setTimeout(()=>{
//        clearInterval(interval)
// },7000)

// console.log("Dealing with impdata")
// console.log("program ended")

//*output
// program starting
// program mid
// Dealing with impdata
// program ended
//!take every time (1s) for print program...
// program...
// program...
// program...
// program...
// program...
// program...
//!print 6 times another 1 time is buffering time 

//! (setInterval() / setTimeout()) => time exact half time (print)
//!(7000/1000) =7 print (program....) but 1 time is buffer (total = 6 times print)


