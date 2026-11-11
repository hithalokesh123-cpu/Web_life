//############## FUNCTION  ###################
// ############# 11-6-2026 ######################

//Write a function to check whether a number is even or odd
// function checkEvenOdd(num){
//     if (num%2==0){
//           console.log('it is even number')
//     }
//     else{
//         console.log('it is odd number')
//     }
// }
// checkEvenOdd(4)

//write a function to find the largest of two number
// function largest(a,b){
//     if (a>b){
//          console.log('a is greatest value')
//     }
//     else{
//         console.log('b is greatest value')
//     }
// }
// largest(10,20)

//write a function to find the square of a number
// let square=(a)=>a**2
// console.log(square(20))

//write a function to calculate the factorial of a number
// function factorial(n){
//    let fact=1
//    for(i=1;i<=n;i++){
//       fact=fact*i
//     }
// return fact    
// }
// console.log((factorial(5)))


//write the function to check whether the string is palindrome or not 
// function is_palindrome(str){
//     let rev=str.split('').reverse().join('')
//     if (str === rev){
//         console.log('it is palindrome')
//     }
//     else{
//          console.log('it is not palindrome')
//     }
// }
// is_palindrome('lal')


//write the function  to reverse a string
// function reverse(str){
//     word=' '
//     for(i=0;i<str.length;i++){
//         word=str[i]+word
//     }
//     return(word)
// }
// console.log(reverse('bad'))


//---------------------------------- DAY 4 --------------------------------------------------
// ARRAY RELATED PROBLEM
//find the sum of all the elements  in an array
// let arr=[1,2,3,4,5]
// let sum=0
// for(i=0;i<arr.length;i++){
//    sum=sum+arr[i]
   
// }
// console.log(sum)

//find the largest element in an array
// let a=[10,15,12,16,4]
// let largest=0
// for(i=0;i<a.length;i++){
//     if (a[i ] > largest){
//       largest=a[i]
//     }
// }
// console.log('The largest element in an array is :'+largest)

//Count even and odd numbers in an array
// a=[1,2,3,15,12,16,17]
// even=0
// odd=0
// for(i=0;i<a.length;i++){
//     if(a[i]%2 == 0){
//         even = even + 1
//     }
//     else{
//         odd = odd + 1
//     }
// }
// console.log('Even number='+even)
// console.log('Odd number='+odd)

//reverse an array without using reverse()
// a=[10,20,30,40,50]
// rev=[]
// for(i=a.length-1;i>=0;i--){
//     rev.push(a[i])
// }
// console.log(rev)

//Find the average of array element
// a=[10,20,30,40,50]
// sum=0
// for(i=0;i<a.length;i++){
//     sum=sum=a[i]
//     average=sum/a.length
// }
// console.log('Average='+average)

//------------------------------- DAY 5 ----------------------------------
//###################### ARRAY METHODS  ###################################
// Second largest in an array
// let a=[10,13,16,22,31,29,39]
// largest=0
// secondlargest=0
// for(i=0;i<a.length;i++){
//     if (a[i]> largest){
//         secondlargest=largest
//         largest=a[i]
//     }
//     else if(a[i]>secondlargest && a[i]<largest){
//         secondlargest=a[i]
//     }
// }
// console.log(secondlargest)

//remove the duplicate element from an array
// let a=[10,20,10,30,20,40]
// let result=[]
// for(i=0;i<a.length;i++){
//     if (!result.includes(a[i])){
//         result[result.length]=a[i]
//     }
    
// }
// console.log(result)

//find the frequency of each element 
// a=[10,20,10,30,20,10]
// let frequency={}
// for(i=0;i<a.length;i++){
//     if(frequency[a[i]] === undefined){
//        frequency[a[i]]=1
//     } else{
//         frequency[a[i]]=frequency[a[i]]+1
//     }
// }
// console.log(frequency)