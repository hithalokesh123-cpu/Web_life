// let a=[1,2,2,3,5]
// console.log(a)

// let b=["sonu",true,35,"hello",65]
// console.log(b)
// b[0]=56
// console.log(b)
// console.log(typeof b)
// console.log(b.length)


//###################  2 ways to create the array ###############
//1) array literals
//we can pass the function object in the arry and item 
// let arr=["sonu",true,35,"hello",65,function(){console.log("hi this array item included in the arr variable"),{name:"hitha"}}]
// arr[5]()
// console.log(arr)


// //2)array constructor
// let arr=new Array(1,3,4,5,6,7)
// console.log(arr)

// // SPECIAL CASE ---> single value will be act as length  when we us as arryay constructor
// let a = new Array(124) 
// console.log(a)                                                    //[ <124 empty items> ]
// console.log(a.length)                                             //124


// ********************************************  STATIC METHOD OF ARRAY **************************************
// ############ 1)Array.from() ############
// let a='marvolous'
// console.log(Array.from(a)) 

//output
// [  'm', 'a', 'r',
//   'v', 'o', 'l',
//   'o', 'u', 's'
// ]

// let b=true
// console.log(Array.from(b))                                          //  []

// let b1=1
// console.log(Array.from(b1))                                        //[]

// ########### syntax--->Array.from(ArrayRef,function()) ###############
// let arr=[7,8,3,5,3,2,1]
// console.log(Array.from(arr,(num)=>num*5))

// let arr1="javascript"
// console.log(Array.from(arr1,(ch)=>ch+0).toString().replaceAll(","," "))


//########### 2)Array.isArray() #################
// let arr=[4,6,7,3,2,1]
// if(Array.isArray(arr)){
//     console.log("data is received in the form of array")
// }
// else{
//     console.log("data is not received in the form of array")
// }

// ############## 3)Array.of() ############
// let a=[1,2,3,4,5,9,10]
// console.log(Array.of(a))
// console.log(Array.of(10))
// console.log(Array.of(1,2,3,))


//INSTANCE METHOD OF ARRAY
// push()
// arr=[1,2,4,3]
// arr.push("goldy")
// console.log(arr)

//pop()
// a=[10,'name',30,58,190,'rosy']
// a.pop()
// console.log(a)


//shift()
// a=[10,'name',30,58,190,'rosy']
// a.shift()
// console.log(a)


//unshift
// a=[10,'name',30,58,190,'rosy']
// a.unshift(56)
// console.log(a)

//slice()
// a=[10,'good',30,'girl',50,70]
// console.log(a.slice(2))
// console.log(a.slice(-2))
// console.log(a.slice(2,4))
// console.log(a.slice(-4,-2))
// console.log(a.slice(5,3))


//splice()
// a=[20,40,60,80,100]
// // let deletedarr=a.splice(1,3)
// // let deletedarr=a.splice(1,3,'somu','ramu','junnu','soni','anish')
// let deletedarr=a.splice(1,0,'somu','ramu','junnu','soni','anish')
// console.log('deletedarr'+ deletedarr)
// console.log(a)

//concat()
// a1=[56]
// b1=[105]
// console.log(a1.concat(b1,88))

//reverse
// a=[1,2,3,4,5,4,7,5]
// console.log(a.reverse())


//join()
// let arr=[10,20,'non',30,'living']
// console.log(arr.join())
// console.log(arr.join('*'))


//indexOf()
// a=[1,2,3,4,5,4,7,5]
// console.log(a.indexOf(4))

//lastIndexOf()
// a=[1,2,3,4,5,4,7,5]
// console.log(a.lastIndexOf(4))

//includes
// a=[1,2,3,4,5,4,7,5]
// console.log(a.includes(4,3))
// console.log(a.includes(8,3))

//entries
// a=[10,20,30,40]
// for(let x of a.entries()){
//     console.log(x)
// }

//keys()
// a=[10,20,30,40]
// for(let x of a.keys()){
//     console.log(x)
// }


//values()
// a=[10,20,30,40]
// for(let x of a.values()){
//     console.log(x)
// }


//every()
// let a=[2.4,6]
// console.log(a.every((num)=>num%2 == 0))
// let a=[2.4,5]
// console.log(a.every((num)=>num%2 == 0))

// let color=['red','green','yellow']
// console.log(color.every((col)=> col != undefined))


//some()
// let array=[1,2,3,4,5,6,7,8,9,10]
// console.log(array.some((num)=>num>5))

//fill()
// let arr=[1,2,3,4,5,6,7]
// console.log(arr.fill("sonal",1,5))

//find()
// let arr=[1,2,3,4,5]
// console.log(arr.find((num)=>num<4))               //1


//findIndex()
// let arr=[1,2,3,4,5]
// console.log(arr.findIndex((num)=>num<4))            //index=0

//findLast()
// let arr=[1,2,3,4,5]
// console.log(arr.findLast((num)=>num%2 == 0))            //4

//findLastIndex()
// let arr=[1,2,3,4,5]
// console.log(arr.findLastIndex((num)=>num%2 == 0))       //index=3

//flat()
// let arr=[1,2,3,[5,6,[7,8]]]
// console.log(arr.flat())                     //[ 1, 2, 3, 5, 6, [ 7, 8 ] ]           
// console.log(arr.flat(2))                   //[1,2,3,5,6,7,8]

// data=[1,[2,[3,[4,5,6,7,],10,6]]]
// console.log(data.flat(Infinity))             //[1,2,3,4,5,6,7,10,6]

//toreversed()
// a=[1,2,3,4,[5,6,7]]
//reverse
// console.log(a.reverse())                   //[ [ 5, 6, 7 ], 4, 3, 2, 1 ]
// console.log(a)                             //[ [ 5, 6, 7 ], 4, 3, 2, 1 ]

//toReversed
// console.log(a.toReversed())                  //[ [ 5, 6, 7 ], 4, 3, 2, 1 ] 
// console.log(a)                               //[ 1, 2, 3, 4, [ 5, 6, 7 ] ]

//sort
// a=[5,8,3,2,9,7]
// console.log(a.sort())

// a1=[1,8,4,20,12]
// console.log(a1.sort())                          //[ 1, 12, 20, 4, 8 ] exception
// //ASCENDING ORDER
// console.log(a1.sort((a,b)=>a-b))                //[ 1, 4, 8, 12, 20 ]  
// // DECSENDING ORDER
// console.log(a1.sort((a,b)=>b-a))                //[ 20, 12, 8, 4, 1 ]

//  color=['apple','anu','milk','papu']
//  console.log(color.sort())                         //[ 'anu', 'apple', 'milk', 'papu' ]


//toSorted()
a1=[1,8,4,20,12]
console.log(a1.toSorted(function(a,b){
    console.log()
}) )
