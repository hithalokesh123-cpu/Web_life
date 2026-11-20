//DESTRUCTURING 

//  ##################################  ARRAY DESTURCTURING   ##########################################
//using indexing 
// let colors=['red','green','blue','white','black']
// console.log(colors[3])                                    //WHITE

//using array destructuring 
//*****  syntax:let [r,g,b,w,bl]=color  ********
// let color=['red','green','blue','white','black']
// let [r,g,,,bl]=color
// console.log(g)
// console.log(bl)
// console.log(w)                                          //error :ReferenceError: w is not defined



// ################################   OBJECT DESTRUCTURING   ###########################################
// let userdata={
//     first_name:'hita',
//     last_name:'l',
//     age:21,
//     IsLoggedIn:true
// }

//accessing the reference with key 
// console.log(userdata.age)                              //21

//using object destructuring 

//*****  syntax=1 => assign all the keys to the variable  ********
// let {first_name,IsLoggedIn,last_name}=userdata
// console.log(first_name)

// ******  syntax=2 => we can use allias instead of obj referenece  ******
// let {first_name:fn,IsLoggedIn:log,last_name:ln}=userdata
// console.log(log)
// console.log(ln)

