// let userInfo={
//     name:'Dinku',
//     isLoggined:true,
//     age:24,

//     reading:function(){
//         console.log("Dinku is reading")
//     },
//     working:function(){
//         console.log("Dinku is working")
//     },
//     eating:function(){
//         console.log("Dinku is eating")
//     },
//     sleeping:function(){
//         console.log("Dinku is sleeping")
//     }

// }
// console.log(userInfo)

//###############################   Access using (.)    #####################################################
//** Example1

// let stud={
//      name:minku,
//     isLoggined:true,
//     age:24,
// }
// console.log(stud)                          // { name: 'Minku', isLoggined: true, age: 24 }
// console.log(stud.isLoggined)               //true
// console.log(stud.name)                     //Minku


//**Example 2
// let details={
//     name:'Dinku',
//     isLoggined:true,
//     age:24,

//     reading:function(){
//         console.log("Dinku is reading")
//     },
//     working:function(){
//         console.log("Dinku is working")
//     },
//     eating:function(){
//         console.log("Dinku is eating")
//     },
//     sleeping:function(){
//         console.log("Dinku is sleeping")
//     },
//     favColor:['pink','green','blue'],
//     address:{
//         city:"pune",
//         pincode:560073,
//         buildingno:253,
//         street:"bapu colony"
//     }
// }
// //Access the sleeping:function
// details.sleeping()                                  //Dinku is sleeping

// //Access the favcolor  in that blue
// console.log(details.favColor)                      //[ 'pink', 'green', 'blue' ]
// console.log(details.favColor[2])                   //blue

// //Access the address=>nested (buildingno)
// console.log(details.address) 
// console.log(details.address.buildingno)              //253


//using square bracket [] notation
// let info={
//     'name%$':'rinku',
//     'is Loggined':true,
//     age:24,
//     7:'Luckyno',

//     reading:function(){
//         console.log("Dinku is reading")
//     },
//     working:function(){
//         console.log("Dinku is working")
//     },
//     eating:function(){
//         console.log("Dinku is eating")
//     },
//     sleeping:function(){
//         console.log("Dinku is sleeping")
//     },
//     favColor:['pink','green','blue'],
//     address:{
//         city:"pune",
//         pincode:560073,
//         buildingno:253,
//         street:"bapu colony"
//     }
// }

//advantages of using the square brackets[]
// console.log(info["name"])

//1.Dynamic Access
// let key = "name"
// console.log(info[key])                                //rinku
// console.log(info.key)                                 //undefined


//2.space in the keys
// console.log(info["is Loggined"])                        //true                
// console.log(info.is Loggined)                       //Error


//3.Special charater in the key
// console.log(info["name%$"])                               //rinku
// console.log(info.name%$)                                  //error


//4.Number in key
// console.log(info["7"])                                     //Luckyno
// console.log(info.7)                                     //error   


//##############################    MODIFICATION ON OBECT PROPERTY #############################
// let data={
//     name:'nili',
//     age:35,
//     flag:'true'
// }


//adding
// console.log(data.location="banagalore")
// console.log(data)                                 //{ name: 'nili', age: 35, flag: 'true', location: 'banagalore' }

//updating
// console.log(data.age=40)
// console.log(data)                                 //{ name: 'nili', age: 40, flag: 'true', location: 'banagalore' }

//deleting
// console.log(delete data.flag)
// console.log(data)                                    //{ name: 'nili', age: 35 }

// ########################## object methods ##########################################
// let data1={
//     name:'nili',
//     age:35,
//     flag:'true'
// }

// //keys()
// console.log(Object.keys(data1))                           //[ 'name', 'age', 'flag' ]

// //values()
// console.log(Object.values(data1))                        //[ 'nili', 35, 'true' ]

// //entries()
// console.log(Object.entries(data1))                      //[ [ 'name', 'nili' ], [ 'age', 35 ], [ 'flag', 'true' ] ]

// //fromEntries()
// let NewdataFormat=Object.entries(data1)
// console.log(Object.fromEntries(NewdataFormat))          //{ name: 'nili', age: 35, flag: 'true' }