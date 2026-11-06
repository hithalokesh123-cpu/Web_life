console.log("COMPARISION OPERATOR");

//EQUAL TO ==

// let a=10
// let b=10
// console.log(a == b)       //true


// let a=10                 //int
// let b="10"               //str  // it check for value only not data type
// console.log(a == b)       //true

// let a=true
// let b=1
// console.log(a == b)       //true

let  a=10n
let b='10n'
console.log(a == b)       //false


//NOT EQUAL TO != only the value is checked not the data type

// let a=10
// let b=20
// console.log(a != b)       //true

// let a=30
// let b="30"
// console.log(a != b)       //false  only value

// let a=30
// let b=30
// console.log(a != b)       //false



//strict equal to ===

// let x=15
// let y=15
// console.log(x === y)            //true

// let x='hi'
// let y='hii'
// console.log(x === y)            //false

// let x=15
// let y="15"
// console.log(x === y)             //false



//strict not equal to !== it will check either any one will true value or data type

// let x=15
// let y=15
// console.log(x !== y)            //false

// let a=13
// let b=14
// console.log(a !== b)            //true

// let c=14
// let d="13"
// console.log(c !== d)            //true



//greater than > and less than < 

// a=100
// b=150
// console.log(a > b)
// console.log(a < b)

//greater than or equal to >= and less than or equal to <=

// let x=250
// let y=250
// console.log(x >= y)
// console.log(x <= y)