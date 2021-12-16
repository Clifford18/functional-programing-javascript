var animals = [
    {name:'Fluffykins', species:'rabbit'},
    {name:'Caro', species:'dog'},
    {name:'Hamilton', species:'dog'},
    {name:'Harold', species:'fish'},
    {name:'Ursula', species:'cat'},
    {name:'Jimmy', species:'fish'},
]
// functions
var mapNames= animals.map(function (animal) {
    return animal.name + 'is a ' + animal.species
})

//arrowfuntion
var mapNamesArrowFunc= animals.map((animal) => {
    return animal.name + 'is a ' + animal.species
})
//arrow function with implicit return
var mapNamesArrowFuncImplicitReturn= animals.map((x) => x.name + 'is a ' + x.species)
//for loop
var forNames =[]
for (var i=0; i<animals.length; i++){
    forNames.push(animals[i].name)
}

//exports
module.exports = {forNames, mapNames, mapNamesArrowFunc, mapNamesArrowFuncImplicitReturn}