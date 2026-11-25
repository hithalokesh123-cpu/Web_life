//##################### object memory allocation #######################
// let userinfo={
//     name:'ramu',
//     age:18,
//     flag:false,
//     working:function(){
//         console.log('is working')
//     }
// }
// console.log(userinfo)             //{ name: 'ramu', age: 18, flag: false, working: [Function: working] }




//################# function memory allocation ##########################
// function add(a,b){
//     console.log(a+b)
// }
// add(10,20)                                                 //30
// //check for name and length of the function 
// console.log(add.name)                                      //add
// console.log(add.length)                                    //2




// ####################  passing data as value   #######################################
// let data1=10;
// let data2=data1;
// console.log(data1);                                    //10
// console.log(data2);                                    //10
// console.log("after the update>>>>");

// data1=100
// console.log(data1);                                   //10 bcz it doesnt have a reletion 
// console.log(data2);                                   //100




// #################### passing data as reference ####################################
// let obj1={
//     name:"somu",
//     age:10
// }
// obj2=obj1
// console.log(obj1);                                   //{ name: 'somu', age: 10 }
// console.log(obj2);                                   //{ name: 'somu', age: 10 }

// console.log("after the update>>>>");

// obj2.age=100
// console.log(obj1.age);                               //100
// console.log(obj2);                            //{ name: 'somu', age: 100 }-->it will effect both bcz reference of object will be same


//########################### closure #################################
// function outerfunction() {

//     console.log("outerfunction execution started");

//     let impData = 10
//     function innerFunction() {
//         console.log("innerFunction exe started");
//         console.log("accesing outerfunction value:" + impData);
//         console.log("innerFunction exe ended");
//     }


//     console.log("outererfunction exec ended");
//     return innerFunction
// }
// let result = outerfunction()
// result()