let nameArray = ['Hassan', 'Jan', 'Peter', 'Boline', 'Frederik']

let sortedArr = nameArray.filter(name => name.includes('a'))

/*
Jeg bruger split("") som tager n(som er et navn) og splitter den strings bogstaver op og danner et nyt
   array. 
   Navnet Hassan.split("") = array['H','a','s','s','s','a']
   Derefter array.reverse() = array['n','a','s','s','a','H']
   Til sidst array.join("") = "nassaH"
*/
let reverseArr = nameArray.map(name => name.split('').reverse().join(''))

console.log(sortedArr)
console.log(reverseArr)