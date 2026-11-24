//  normal traversing
// a=[1,2,3,4,5]
// for (i=0;i<a.length;i++){
//     console.log(a[i])
// }

//################## map() ############################
// a=[1,2,3,4,5,6]
// function multiply(x){
//     return x*5
// }
// let newArr  =a.map(multiply)
// console.log("NewArray:"+newArr)            //NewArray:5,10,15,20,25,30
// console.log("OriginalArray:"+a)            //OriginalArray:1,2,3,4,5,6

//map() using arrow function
// a=[1,2,3,4,5]
// let newArr = a.map(x => x*5)
// console.log(newArr)

//map getting item,index
// a=[1,2,3,4,5,6]
// a.map((item,index,orgarray)=>{
//      console.log(item,index,orgarray)
// })


//cube items using map()
// a=[1,2,3,4,5]
// a.map((item,index,orgarray)=>{
//     console.log(item**3,index,orgarray)
// })


//using arrow function
// a=[1,2,3,4,5]
// let res=a.map((item,index,orgarray)=>item*item*item)
// console.log(res)


//############################## filter() ######################################
// data=[1,2,3,4,5,6,3,2,1]
// let res=data.filter((item,index,org)=>item%2 == 0)
// console.log(res)

//filter the name len is greater than 5
// a=['mangoliya','sunil','gopal','rani','jinu']
// let res=a.filter((item,index,org)=>item.length>=5)
// console.log(res)

//filter out only name which sart with 'r'
// data=['ramola','geetha','kohil','ramu']
// let res=data.filter((item,index,org)=>item[0] == 'r')
// console.log(res)

//filter out empty string from the  array
// data=['somu',' ','ramu','gangu',' ']
// let res=data.filter((item,index,org)=>item!=' ' && item)
// console.log(res)

//name which consiting of 'a'
// data=['somu','moni','ramu','gangu','goldy']
// let res=data.filter((item,index,org)=>item.includes('a'))
// console.log(res)

//filter the number which consit the value 5
// data=[145,45,64,73,35,40]
// let res=data.filter((item,index,org)=>item.toString().includes('5'))
// console.log(res)



//######################### reduce() ##############################
//sum
// a=[1,2,2,3,1,4,5,5.6]
// let res=a.reduce((acc,curval)=>acc+curval,0)
// console.log(res)                                  //23.6  //intial=100  =>123.6


//product
// a=[1,2,2,3,1,4,5,5.6]
// let res=a.reduce((acc,x)=>acc*x,1)
// console.log(res)

//find out the sum  of all the  even number in the array
// a=[1,2,3,4,5,6,7,8,9]
// let res=a.filter((item)=>item%2 == 0).reduce((acc,x)=>acc+x)
// console.log(res)

//count of all the odd number in the given array
// a=[1,2,3,4,5,6,7,8,9]
// let res=a.filter((item)=>item%2!= 0).reduce((acc,x)=>acc+x)
// console.log(res)


//find the sum of square of the  given element
// a=[1,2,3,4,5,6,7,8,9]
// let res=a.filter((item)=>item*item).reduce((acc,x)=>acc+x)
// console.log(res)

//count how many number divisible by 2 and 3
a=[1,2,3,4,5,6,7,8,9]
let res=a.filter((item)=>(item%2==0) && (item%3== 0)).reduce((acc,x)=>acc + x)
console.log(res)

//find the total number of character in the the string 
