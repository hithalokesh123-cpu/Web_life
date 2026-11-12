//Explicit type casting
// let a='10'
// console.log(a)
// console.log(typeof a)
// //Number
// console.log(Number(a))
// console.log(typeof Number(a))

//string-->number
// let s='junnu'
// console.log(Number(s))                               //nan



//empty space-->Number
// let d=''
// console.log(Number(d))                              //0

// let d1=' '
// console.log(Number(d1))                            //0

// let d2=' 1'
// console.log(Number(d2))                           //1

// let d3=' 1 2'
// console.log(Number(d3))                          //nan




//Boolean---> Number
// let b=true
// console.log(Number(b))                             //1

// let b1='true'
// console.log(Number(b1))                           //Nan


//parseInt()
// let data='10'
// console.log(parseInt(data))                          //10

// let data1='10.89'
// console.log(parseInt(data1))                          //10

// let data2='3456 dfh'
// console.log(parseInt(data2))                         //3456

// let data3='2 4 5'
// console.log(parseInt(data3))                         //2

// let data4=''
// console.log(parseInt(data4))                       //Nan

// let data5='sun'
// console.log(parseInt(data5))                       //Nan

// let data6=true
// console.log(parseInt(data6))                      //Nan

//parseFLoat
// let d='20.34'
// console.log(parseFloat(d))                          //20.34



//Converting data to string 
// let s=100
// console.log(String(s))
// s=String(s)
// console.log(typeof s)

// let s1='10.15'
// console.log(String(s1))
// console.log(typeof String(s1))

// let s2=true
// console.log(String(s2))
// console.log(typeof String(s2))

// let s3=''
// console.log(String(s3))                                                 //empty
// console.log(typeof String(s3))                                          //string

// let  s4=new String(36)
// console.log(s4)                                                           //[String: '36]
// console.log(typeof String(s4))                                            //string


// toString -->not recommend to go for this 
// let data1=new String('10')
// console.log(data1)                                          //[String: '10']
// console.log(data1. toString())                               //10


//converting  to boolean data type
// let d=10
// console.log(Boolean(d))                                        //true

// let d1=true
// console.log(Boolean(d1))                                      //true

// let d2='son'
// console.log(Boolean(d2))                                     //true

//Falsy
// let d3=false
// console.log(Boolean(d3))                                     //false

// let d4=0
// console.log(Boolean(d4))                                    //false

// let d5=-0
// console.log(Boolean(d5))                                    //false

// let d6=0n
// console.log(Boolean(d6))                                    //false

// let d7=null
// console.log(Boolean(d7))                                     //false

// let d8=undefined
// console.log(Boolean(d8))                                    //false

// let d9=""
// console.log(Boolean(d9))                                    //false

// let d10=NaN
// console.log(Boolean(d10))                                   //false

//LOGICAL OPERATOR/ SHORT CIRCUIT OPERATOR 

//&&
// let data=true && false                                             //false
// let data=true && 'somu'                                            //somu
// let data='somu' && false                                           //false
// let data='somu' && true                                            //true
// let data= false && 'somu'                                          //false
// let data='rani' && 'somu'                                          //somu
// console.log(data)


// || 
// let data=true || false                                             //false
// let data=true || 'somu'                                            //true
// let data='rani'  || 'somu'                                         //rani
// let data='rani'|| false                                            //rani
// let data= false || 'somu'                                          //somu
// console.log(data)

// !
// console.log(!!"remo")                                                 //true
// console.log(!!!"remo")                                                //false