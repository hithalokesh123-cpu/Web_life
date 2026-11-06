// 2 ways to create the string
// using single quotes
// s='wednesday'
// console.log(s)
// console.log(typeof s)

//using double quotes
// s="today is not good day"
// console.log(s)
// console.log(typeof s)


//using template literal backtick
// s= `traffic day`
// console.log(s)
// console.log(typeof s)


//concatenation and backtick example
// let s1='Rima'
// let s2='Bhanu'

// console.log("The first name is " + s1 + " and The last name is " + s2)
// console.log("The full name is "+(s1+s2))

// console.log(`The first name is ${s1} and The last name is ${s2}`)
// console.log(`The full name is ${s1+s2}`)



//using String Object
// let str=new String('Welcome to javascript')
// console.log(str)
// console.log(String)
// console.log(typeof str)


//length of the str 
// let s='Malleshwaram'
// console.log(s.length)

//using indexing for the string to access the individual element
// let a='rich'
// console.log(a[0])
// console.log(a[a.length-1])
// console.log(a[-3])


//Static Method string
// fromCharCode()
// let str=String.fromCharCode(72,105,116,104,97,105,115,104,114,101,101)
// console.log(str)                                                                                   //Hithaishree


//fromCodePoint
// let str=String.fromCodePoint(128526)
// console.log(str) 


//raw
// let str=String.raw`hello"@##$sdfg`
// console.log(str) 



//Instance MetHod of string

//at()-->+and -  same like indexing type
// let s='food'
// console.log(s.at(0))
// console.log(s.at(-2))


//charAt()-- onle positive  indexing is allowed
// let s1='food'
// console.log(s1.charAt(0))
// console.log(s1.charAt(-2))

//charCodeAt() -->returns index character ascii code
// let s='Ammu'
// console.log(s.charCodeAt(2))                          //109

//concat()
// let str1="java"
// let str2="script"
// // let newStr=str1.concat(str2)
// let newStr=str1.concat(" ",str2," ","wonderfull"," ","Subject")                      //space in between we can pass multiple concat
// console.log(newStr)


//includes
// let str='Wonderfull language'
// console.log(str.includes('uage'))                                    //true
// console.log(str.includes('uage',14))                                // start index=14   true
// console.log(str.includes('age',21))                                 //false

//indexOf
// let s="javascript is wonderfull language"
// console.log(s.indexOf('j'))                                             //0
// console.log(s.indexOf('a',24))                                          //26
// console.log(s.indexOf('a',31))                                          //-1


//lastIndexOf()
// let s=' bad expectation on me'
// console.log(s.lastIndexOf('a'))                                             //11
// console.log(s.lastIndexOf('a', 2))                                          //2

//split()
// let s="javascript is wonderfull language"
// console.log(s.split())                                                       //[ 'javascript is wonderfull language'
// console.log(s.split(" "))                                                     //[ 'javascript', 'is', 'wonderfull', 'language' ]
// console.log(s.split(""))
//[
  //'j', 'a', 'v', 'a', 's', 'c',
 // 'r', 'i', 'p', 't', ' ', 'i',
 // 's', ' ', 'w', 'o', 'n', 'd',
 // 'e', 'r', 'f', 'u', 'l', 'l',
 // ' ', 'l', 'a', 'n', 'g', 'u',
 // 'a', 'g', 'e'
//]
// console.log(s.split("",3))                                                     //[ 'j', 'a', 'v' ]


//toUpperCase()
//  let s="javascript is wonderfull language"
//  console.log(s.toUpperCase())

//toLocalLowerCase()
// let s="JAVASCRIPT IS WONDERFULL LANGUAGE"
// console.log(s.toLocaleLowerCase("tr"))

//toLowercase()
//  let s1="javascript is wonderfull language"
//  console.log(s1.toLowerCase())

//trim()
//  let s="  javascript is wonderfull language   "
//  console.log(s.trim())
//  console.log(s)
//  console.log(s.length)                                                          //38
//  console.log(s.trim().length)                                                   //33


 //trimStart()
//  let s="  javascript is wonderfull language   "   
// console.log(s.trimStart())                                                        //javascript is wonderfull language  


//trimEnd()
//  let s1="  javascript is wonderfull language   "                                 
// console.log(s1.trimEnd())                                                          //  javascript is wonderfull language

 
//startsWith()
// let link="https://www.google.com"
// console.log(link.startsWith("https"))

//EndsWith()
// let data="image.png"
// console.log(data.endsWith("png"))


//repeat()
// let s='more complicated '
// console.log(s.repeat(5))

//padStart()
// let s='name'
// console.log(s.padStart(9,'*'))                                                       //*****name
// console.log(s.padStart(1,'%'))                                                       //name


//padEnd()
// let s='name'
// console.log(s.padEnd(9,'*'))                                                       //name*****
// console.log(s.padEnd(1,'%'))                                                       //name


//replace
// let s='novel nohan'
// console.log(s.replace("no","mor"))                                                      //morvel nohan


//replaceAll()
// let d="somu somu"                                                                       // ramu ramu
// console.log(d.replaceAll("so","ra"))


//toString()
// let n=52
// console.log(n.toString())
// console.log(typeof(n))
// console.log(typeof(n.toString()))



//slice()
// let s='javascript is wonderfull language'
// console.log(s.slice(4))                                                 // script is wonderfull language                                                 
// console.log(s.slice(-19))                                               //  wonderfull language
// console.log(s.slice(11,22))                                               //is wonderfu
// console.log(s.slice(-15,-7))                                            //erfull l
// console.log(s.slice(22,11))                                             //empty
// console.log(s.slice(-10,-22))                                             //empty


//substring()
// let s='javascript is wonderfull language'
// console.log(s.substring(4))                                                //script is wonderfull language
// console.log(s.substring(-19))                                              // si=0 and ei=0  javascript is wonderfull language
// console.log(s.substring(11,22))                                             //is wonderfu
// console.log(s.substring(-15,-7))                                            // empty 
// console.log(s.substring(22,11))                                             //swap ei,si    is wonderfu
// console.log(s.substring(-10,-22))                                           //empty




// console.log(s.length)
// console.log(s.at(0))
// console.log(s.substring(22,11)) 
// console.log(s.slice(-15,-7)) 
// console.log(n.toString())
// console.log(d.replaceAll("so","ra"))
// console.log(s.replace("no","mor"))  
// console.log(s.padEnd(9,'*'))
// console.log(s.padStart(9,'*')) 
// console.log(s.repeat(5))
// console.log(data.endsWith("png"))
// console.log(link.startsWith("https"))
// console.log(s1.trimEnd()) 
// console.log(s.trimStart())



// ##################### problematic on string ####################################
//count no of char without the length
//  let data='javascript is wonderful language'
//  let count=0
//  for(i=0;data.charAt(i);i++){
//   count++
//  }
//  console.log(count)



//count the vowel
//  let data='javascript is wonderful language'
//  let count=0
//  for(i=0;i<data.length;i++){
//   let ch=data.charAt(i)
//   if ('AEIOUaeiou'.includes(ch)==true){
//     count++
//   }
// }
// console.log('count of vowel :'+count)

// let data='javascript is wonderful language'
// let count=0
//  for(i=0;i<data.length;i++){
//   if (data[i] =='a' || data[i] == 'e' || data[i] == 'i' || data[i] == 'o' || data[i] == 'u'){
//     count++
//   }
//  }
// console.log('count of vowel :'+count)



// let data='javascript is wonderful language'
// data=(data[0].toUpperCase()+data.slice(1))
// console.log(data)


//remove the space in the string in beg,end,between
// let data='  javascript is wonderful language  '
// console.log(data.trim().replaceAll(' ',''))  


//reverse the string
// s1='good bad'
// console.log(s1.split("").reverse().join(""))

//validate email address
// email='abcd123@gmail.com'
// if(email.endsWith('@gmail.com')){
//   console.log('it is valid email')
// }
// else{
//   console.log('it is not valid email')
// }

//4 digit credit card number  should display rest all for privacy
// creditno='234567890987654'
// console.log(creditno.slice(-4).padStart(creditno.length,'*'))

//check if a word is pallindrome or not 
// function is_palindrome(str){
//   let rev=str.split('').reverse().join('')
//   return str === rev
// }
// console.log(is_palindrome('energy'))
// console.log(is_palindrome('mom'))
// console.log(is_palindrome('bob'))
// console.log(is_palindrome('bomb'))


// //extract file extraction from a filename
// file='image.png'
// console.log(file.slice(file.lastIndexOf('.')))
 
// function filename(file){
//     return (file.slice(file.lastIndexOf('.')))
// }
// console.log(filename("document.txt"))