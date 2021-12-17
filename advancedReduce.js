//import  fs from 'fs'
var fs = require('fs')
var dataOutput =fs.readFileSync('data.txt','utf8')
    .trim()
    .split('\n')
    .map(line => line.split('\t'))
    // .reduce((customers,line) => {
    //     customers[line[0]=[]]
    //     customers[line[0]=[]].push({
    //         name:line[1],
    //         price:line[2],
    //         quantity:line[3]
    //     })
    //     return customers
    // },{})

console.log('output from dat.txt =',dataOutput)











// {
//     'mark johnsson':
//     [
//         {name: 'waffle iron', price: '88', quantity: '2'},
//         {name: 'blender', price: '200', quantity: '1'},
//         {name: 'knife', price: '10', quantity: '4'}
//     ],
//         'mark johnsson':
//     [
//         {name: 'waffle iron', price: '88', quantity: '2'},
//         {name: 'blender', price: '200', quantity: '1'},
//         {name: 'knife', price: '10', quantity: '4'}
//     ]
// }