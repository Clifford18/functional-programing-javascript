var orders =[
    {amount: 250},
    {amount: 400},
    {amount: 100},
    {amount: 325}
]
//reduce
var reduceTotalAmount = orders.reduce(function (sum,order) {
   // console.log("Hello",sum,order)
    return sum +order.amount
},0)

//reduce arrowfunction
var reduceArrowFuncTotalAmount = orders.reduce((sum,order) => sum +order.amount,0)

//for loop
var forTotalAmount = 0
for (var i =0; i<orders.length;i++){
    forTotalAmount +=orders[i].amount
}

//module.exports = {forTotalAmount,reduceTotalAmount,reduceArrowFuncTotalAmount}