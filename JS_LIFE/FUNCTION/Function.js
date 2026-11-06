// function  Printer(){
//     console.log("function concept")
//     console.log("function calling")
// }
// Printer()

// TYPE OF FUNCTION
// ########################################   NAMED FUNCTION  #####################################33333333333333

// function GM(){
//     console.log("Good Morning")
// }
// GM()
// function GA(){
//     console.log("Good Afternoon")
// }
// GA()
// function GE(){
//     console.log("Good Evening")
// }
// GE()




// #############################  argument and paramter ###################################################
// function greet(time){
//     if((9<time)&&(time<12)){
//         console.log("Good Morning")
//     }
//     else if((12<time)&&(time<17)){
//         console.log("Good Afternoon")
//     }
//     else if((17<time)&&(time<21)){
//         console.log("Good Evening")
//     }
//     else{
//         console.log("invalid time")
//     }
// }
// greet(10)
// greet(14)
// greet(20)
// greet(2000)

//##################################  return keyword   #######################################################
// function sum_marks(math,phy,chem,kan,eng){
//     //rstyuritoyupityuhio                         // error msg
//     return math+phy+chem+kan+eng
//     ndvgfyshfoaelfsiu                           //nthing will print
// }
//  let result=sum_marks(96,76,85,99,100)
//  console.log(result)


// ########################################  ANONYMOUS FUNCTION   ############################################

// let monster=function(){
//     console.log(" this is not calling  function monster" );
    
// }
// monster()

// ############################################# ARROW FUNCTION ##############################################

// *** syntax *****
// let addition=(a,b) => {
//     console.log(a+b)
// }
// addition(10,20)

// *** CASE 1  ***
// let addition=(a,b)=>a+b
// console.log(addition(10,20))

//CASE 1.0
// let addition=(a,b)=>{a+b}                       //UNDEFINED
// console.log(addition(10,20))

//CASE 1.1
// let addition=(a,b)=>{return a+b}                  // 30
// console.log(addition(10,20))

// *** CASE 2 **
// let addition=a=>a+20
// console.log(addition(10))

// *** CASE 3 ***
// let addition=_=>20+20
// console.log(addition())

// ########################## RETURN ARROW FUNCTION ##########################################
//EXPLICIT ---- WITH RETURN KEYWORD
// let addition=(a,b)=> {return a+b}
// console.log(addition(10,20))

//IMPLICIT --- WITHOUT RETURN KEYWORD
// let addition=(a,b)=>a+b
// console.log(addition(10,20))

//FUNCTION EXPRESSION
// let addition=(a,b)=>{
//     console.log(10+20)          //function expression
// }
// addition()

// ########################### CALLBACK FUNCTION ####################################################
// ** 1 way **
// function task(fun_add){
//         fun()
// }
// function add(){
//     console.log(20+30);
    
// }
// task()

//**2 ways **
// function task(fun){
//         fun()
// }
// task(
//     function (){
//     console.log(20+30);
//     }
// )


// ######################################### HOF ##############################################
// *** 1 ways ***
// function task(fun){
//         fun()
// }
// task(
//     function add(){
//     console.log(20+30);
//     }
// )

//*** 2 way  ***
// function Task (){
//     return function (){
//         console.log("Thank you")
//     }
// }
// let result = Task()
// result()

//*** 3 ways ***
// function main(a,b){
//     console.log(a+b)
//     return function(){
//         console.log('Thank you')
//     }
// }
// let res=main(30,20)
// res()


// ################## callback and hof ######################################

// function add(a,b){
//     return (a+b)
// }
// function sub(a,b){
//     return (a-b)
// }
// function mul(a,b){
//     return (a*b)
// }
// function div(a,b){
//     return (a/b)
// }
// function calc(callback,a,b){
//     console.log(callback(a,b));
    
// }
// calc(sub,40,50)


// ################## callback and hof ######################################
// function Greeting(callback){
//     console.log("welcome to royalmart cafe")
//     console.log("please select your order")
//     callback()
//     // non_ginger_roti()

// }
// function chicken_butter_masala(){
//     console.log("thank you for your order....")
//     console.log("your order chicken butter masala getting ready.....")
//     console.log("Here is your order")
    
// }
// function paneer_butter_masala(){
//     console.log("thank you for your order....")
//     console.log("your order paneer butter masala getting ready.....")
//     console.log("Here is your order")

// }
// function  non_ginger_roti(){
//     console.log("thank you for your order....")
//     console.log("your order non ginger roti getting ready.....")
//     console.log("Here is your order")

// }

// Greeting(paneer_butter_masala)
// // Greeting(non_ginger_roti)



// ################## callback and hof dynamic flow ######################################

// function Greeting(callback,takeaway){
//     console.log("welcome to royalmart cafe")
//     console.log("please select your order")
//     console.log("...........")
//     callback(takeaway)
//     // non_ginger_roti()

// }
// function chicken_butter_masala(takeaway){
//     setTimeout(()=>{
//     console.log("thank you for your order....")
//     console.log("your order chicken butter masala getting ready.....")
//     console.log("Here is your order")
//      console.log("...........")
//     takeaway()
//     },5000)
// }

// function paneer_butter_masala(takeaway){
//      setTimeout(()=>{
//     console.log("thank you for your order....")
//     console.log("your order paneer butter masala getting ready.....")
//     console.log("Here is your order")
//     console.log("...........")
//     takeaway()
//     },5000)

// }
// function  non_ginger_roti(takeaway){
//     setTimeout(()=>{
//     console.log("thank you for your order....")
//     console.log("your order non ginger roti getting ready.....")
//     console.log("Here is your order")
//     console.log("...........")
//     takeaway()
//     },5000)

// }
// function takeaway(){
//     console.log("your order is ready....you can take away.....")
// }

// Greeting(paneer_butter_masala,takeaway)


function update_cart_count(cart_count,button){
    if (button == '+'){
        cart_count+=1
        return cart_count
    }
    else{
        cart_count-=1
        return cart_count
    }

}
console.log(update_cart_count(1,'+'))