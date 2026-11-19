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

//assign()
// let user={
//        name:'Yashu'
// }
// let persnal_info={
//     age:25,
//     flag:false
// }
// let Info_user={
//     pass_code:'7654hgfdfuytr'
// }
// let finalUserdata=Object.assign({}, user,persnal_info)
// console.log(finalUserdata)                        //{ name: 'Yashu', age: 25, flag: false }

//Example2
// let user={
//        name:'Yashu'
// }
// let persnal_info={
//     age:25,
//     flag:false
// }
// let Info_user={
//     pass_code:'7654hgfdfuytr'
// }
// let finalUserdata=Object.assign(Info_user, user,persnal_info)
// console.log(Info_user)                 //{ pass_code: '7654hgfdfuytr', name: 'Yashu', age: 25, flag: false }


//seal()
// let emp_info={
//     full_name:'Dinku Maharaja',
//     age:36,
//     pan_no:'2345678YUIPFGH',
//     IsLoggedin:true
// }
// Object.seal(emp_info)

// console.log('After sealing the object data')

// //delete the pan_no
// // delete emp_info.pan_no
// // console.log(emp_info)                            // no same emp_info ,not deleted

// //UPDATE AGE = 37
// // emp_info.age=37
// // console.log(emp_info)                               //yes upadate age =37 ,rest all same 

// //addition
// emp_info.refer='rani'
// console.log(emp_info)                                //no changes ,not added refer=rani same emp_info


//Object.isSealed()
// let emp_info={
//     full_name:'Dinku Maharaja',
//     age:36,
//     pan_no:'2345678YUIPFGH',
//     IsLoggedin:true
// }
// Object.seal(emp_info)
// if(Object.isSealed(emp_info)){
//     console.log("We can't able to do some operation")
// }
// else{
//     console.log("We can able to do some operation")
// }


//Object.freeze()
// let emp_info={
//     full_name:'Dinku Maharaja',
//     age:36,
//     pan_no:'2345678YUIPFGH',
//     IsLoggedin:true
// }
// Object.freeze(emp_info)
// //deletion
// delete emp_info.pan_no
// //addition
// emp_info.refer='rani'
// //updation
// emp_info.age=37
// console.log(emp_info)

//******** output **********
// {
//   full_name: 'Dinku Maharaja',
//   age: 36,
//   pan_no: '2345678YUIPFGH',
//   IsLoggedin: true
// }


//object.isFreeze()
// let emp_info={
//     full_name:'Dinku Maharaja',
//     age:36,
//     pan_no:'2345678YUIPFGH',
//     IsLoggedin:true
// }
// Object.freeze(emp_info)
// if(Object.isFrozen(emp_info)){
//       console.log('TRUE')
// }
// else{
//     console.log('FALSE')
// }


//object.hasOwn()
// let emp_info={
//     full_name:'Dinku Maharaja',
//     age:36,
//     pan_no:'2345678YUIPFGH',
//     IsLoggedin:true
// }
// let res=Object.hasOwn(emp_info,"IsLoggedin")             //true
// console.log(res)


//object.is()
// let emp_info={
//     full_name:'Dinku Maharaja',
//     age:36,
//     pan_no:'2345678YUIPFGH',
//     IsLoggedin:true
// }

//values
// let res=Object.is(emp_info.full_name,"Dinku Maharaja")             //true
// console.log(res)

//object
// let res=Object.is(emp_info,{name:'ramu',age:25})
// console.log(res)                                                     //false

// let rani={
//      name:'ramu',
//      age:25
// }
// let res=Object.is(emp_info,rani)
// console.log(res)                                                        //false