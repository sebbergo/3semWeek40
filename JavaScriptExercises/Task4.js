var all = ["Hassan", "Peter", "Carla", "Boline"]
var numbers = [2, 3, 67, 33]
var members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22}
]
   
let newJoinArr = all.join("#")

let reducer = (accumulator, currentValue) => accumulator + currentValue;

let newReducedArr = numbers.reduce(reducer)

let newReducedArr2 = (members.map(member => member.age).reduce(reducer))/members.length

const votes = [ "Biden","Trump","Biden","Biden","Trump","Trump","Biden","None"];

let totalVotes = votes.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++
  }
  else {
    allNames[name] = 1
  }
  return allNames
}, {})

console.log(newReducedArr2)
//console.log(newReducerArr)
//console.log(newJoinArr)