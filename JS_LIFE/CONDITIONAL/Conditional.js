console.log("CONDITIONAL")

//if condition

// let age=20
// if(age>=18){
//     console.log("you can vote")
// }



//if-else

// let age=12
// if(age>=18){
//     console.log("you can vote")
// }
// else{
//    console.log("get lost") 
// }



//else if condition

// let marks=75
// if(marks >= 90){
//     console.log("Grade A+")
// }
// else if(marks >= 80){
//     console.log("Grade A")
// }
// else if(marks >= 70){
//     console.log("Grade B+")
// }
// else if(marks >= 60){
//     console.log("Grade B")
// }
// else{
//     console.log("FAIL GONE CASE")
// }



// check postive,negative,zero number
// let num=0
// if (num>0){
//     console.log("positive number",num)
// }
// else if (num<0){
//     console.log("negative number",num)
// }
// else{
//     console.log("number is zero",num)
// }


//  checking greatest between the 2 value
// let a=350
// let b=50
// if(a < b){
//     console.log("b is greatest number")
// }
// else{
//      console.log("a is greatest number")
// }



// checking greatest between the 3 values
// let a=10
// let b=20
// let c=25
// if(a > b && a > c){
//     console.log("a is greatest number")
// }
// else if (b > a && b > c){
//      console.log("b is greatest number")
// }
// else{
//       console.log("c is greater")
// }


//switch
// let days = 6
// switch(days){
//     case 1:console.log("Monday")
//     break
//     case 2:console.log("Tuesday")
//     break
//     case 3:console.log("Wednesday")
//     break
//     case 4:console.log("Thursday")
//     break
//     case 5:console.log("Friday")
//     break
//     case 6:console.log("Saturday")
//     break
//     default:console.log("invalid days")
// }

//checking with vowel or consonant
// let vowel='f'
// switch(vowel){
//     case 'a':console.log('vowel')
//     break
//     case 'e':console.log('vowel')
//     break
//     case 'i':console.log('vowel')
//     break
//     case 'o':console.log('vowel')
//     break
//     case 'u':console.log('vowel')
//     break
//     default:
//         console.log('consonant')

// }


//CONDITIONAL OPERATOR

// let flag=false
// let result=flag ? "logg in" : "logg out"
// console.log(result)


// let age=30
// console.log(age>21 ? "welecome to party" :"get lost")

// let marks=45
// console.log( marks >= 90  ? "Grade A" :
//              marks >= 80  ? "Grade B" :
//              marks <= 70  ? "Grade C" :
//              "fail");




//1.check whether the number is positive or negative 
// let n1=35
// console.log(n1>0 ? "n1 is positive" : "n1 is negative")


//2.check whether the number is even or odd
// let num=8
// console.log(num%2===0 ? "even number" : "odd number")


//3.check whether the number is divisible by 5 or not
// let a=25
// console.log(a%5===0 ? "divisible by 5" : "not divisible by 5")

 
//4.check whether the number is divisible by 3 and 5 or not
// let n=15
// console.log(n%3===0 && n%5===0 ? "divisible by 3 and 5" : "not divisible by 3 and 5")


//5.check whether a character is vowel or consonant
// let ch='u'
// console.log(ch==='a' || ch==='e' || ch==='i' || ch==='o' || ch==='u' ? "vowel" : "consonant")


//6.check whether tyhe number is two-digit number or not
let b=100
console.log(10 <= b && b <= 99 ? "two-digit number" : "not two-digit number")
            