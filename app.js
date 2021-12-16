const {filterDogs,forLoopDogs, alterFilterDogs} = require("./filter")
const {forNames,mapNames, mapNamesArrowFunc, mapNamesArrowFuncImplicitReturn} =require("./map")
console.log ("test")

//filter
console.log ("@Dogs filter", JSON.stringify(filterDogs, null, 2) )
console.log ("@Dogs forloop", JSON.stringify(forLoopDogs, null, 2) )
console.log ("@Dogs alternate ", JSON.stringify(alterFilterDogs, null, 2) )
//maps
console.log ("@Names Forloop ", JSON.stringify(forNames, null, 2) )
console.log ("@Names Maps ", JSON.stringify(mapNames, null, 2) )
console.log ("@Names MapsArrowFunction ", JSON.stringify(mapNamesArrowFunc, null, 2) )
console.log ("@Names MapsArrowFunctionImplicitReturn  ", JSON.stringify(mapNamesArrowFuncImplicitReturn, null, 2) )
