//import BIKE
// import toys from './USA.js'
// console.log(toys)

//multiple data import  
// import toys1 from './USA.js'
// import toys2 from './USA.js'
// console.log(toys1)
// console.log(toys2)      //multiple data cannot be import  it is not possible in default export


//multiple data import using = {key:val}
// import object from './USA.js'
// console.log(object.toys1)
// console.log(object.toys2)


//************************ DESTURTURING *************************************************
//using desturturing in single line is not possible multiple data import(export using =>{key:val})
// import {toys1,toys2} from './USA.js'
// console.log(toys1)
// console.log(toys2)           //ERROR  => desturing single line is not possible while import 

////using desturturing in double line is  possible multiple data import(export using =>{key:val})
// import object from './USA.js'
// let {toys1:t1,toys2:t2}=object
// console.log(t1);console.log(t2)
