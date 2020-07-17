const cityDatabase = require("all-the-cities")

var hugeCities = cityDatabase.filter(function(item){

    var citiesPopulation = item.population > 10000000
    return citiesPopulation 
})
console.log(cityDatabase)

var nameChengdu = cityDatabase.find(function(item){
    var cityName = item.name
    var isCorresct = item.name === "Chengdu"
    return isCorresct
})
console.log(nameChengdu)
