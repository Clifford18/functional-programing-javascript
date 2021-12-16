const {filterDogs,forLoopDogs, alterFilterDogs} = require("./filter")

console.log ("test")

console.log ("@Dogs filter", JSON.stringify(filterDogs, null, 2) )

console.log ("@Dogs forloop", JSON.stringify(forLoopDogs, null, 2) )

console.log ("@Dogs alternate ", JSON.stringify(alterFilterDogs, null, 2) )
