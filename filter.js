var animals = [
    {name:'Fluffykins', species:'rabbit'},
    {name:'Caro', species:'dog'},
    {name:'Hamilton', species:'dog'},
    {name:'Harold', species:'fish'},
    {name:'Ursula', species:'cat'},
    {name:'Jimmy', species:'fish'},

]

var filterDogs = animals.filter(function (animal){
    return animal.species ==="dog"
})

var isDog =function (animal){
    return animal.species ==="dog"
}
var alterFilterDogs = animals.filter(isDog)



var forLoopDogs =[];
for (var i=0; i<animals.length; i++){
    if (animals[i].species === 'dog')
        forLoopDogs.push(animals[i]);
}

module.exports = {filterDogs,forLoopDogs,alterFilterDogs}