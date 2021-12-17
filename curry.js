//import _ from 'lodash'
var _ = require('lodash')


let carry_Dragon = (name, size, element) =>
    name + 'is a ' +
    size + 'dragon that breathes ' +
    element + '!'
carry_Dragon = _.curry(carry_Dragon)

let notCarryDragon = (name, size, element) =>
    name + 'is a ' +
    size + 'dragon that breathes ' +
    element + '!'

let carryDragon =
    name =>
        size =>
            element =>
                name + 'is a ' +
                size + 'dragon that breathes ' +
                element + '!'
let dragons = [
    {name:'fluffykins',element:'lightning'},
    {name:'noomi',element:'lightning'},
    {name:'karo',element:'fire'},
    {name:'doomer',element:'timewarp'}
]
let hasElement=
    (element,obj) => obj.element === element
let lightningDragons =
    dragons.filter(x=>hasElement('lightning',x))

let hasElementCurry=
    _.curry((element,obj) => obj.element === element)

let lightningDragonsCurry =
    dragons.filter(hasElementCurry('lightning'))

//resource https://lodash.com/docs#curry

module.exports = {notCarryDragon, carryDragon, carry_Dragon,lightningDragons,lightningDragonsCurry}