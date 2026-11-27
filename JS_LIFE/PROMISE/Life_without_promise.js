//^ cafe       callback hell/pyramid dom
function orderfood(callback){
    setTimeout(()=>{
         console.log("Food is ordered")
         callback()
    },2000)
}

function prepared(callback){
    setTimeout(()=>{
        console.log('food is prepared')
        callback()
    },4000)
}

function payment(callback){
    setTimeout(()=>{
        console.log('Payment is done successfully')
        callback()
    },2000)
}

function takeaway(callback){
    setTimeout(()=>{
        console.log('Your food is ready to take away')
        callback()
    },3000)
} 


orderfood(()=>{
    prepared(()=>{
        payment(()=>{
            takeaway(()=>{
            console.log("THank you for your order")
           })
       })
    })
})
