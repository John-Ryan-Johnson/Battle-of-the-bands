
let bandNumber = 1

const takeNumber = function (bandName) {
  let eachBand = `${bandNumber}. ${bandName}`
  bandNumber++
  return eachBand
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  
const under = takeNumber("Underdogs")
console.log(under)  

