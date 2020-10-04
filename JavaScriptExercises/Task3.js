var numbers = [1, 3, 5, 10, 11];
let names = ['Hassan', 'Jan', 'Peter', 'Boline', 'Frederik']
var persons = [{name:"Hassan",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Boline", phone: "79345"}];


function addArr(array){
    let result = []
    let count = 0

    array.map(function(index){
        if(array[count + 1] != null){
            result.push(index + array[count + 1])
            count++
        } else {
            result.push(index)
            count++
        }
    })
    
    /*
    for (let index = 0; index < array.length; index++) {
        if(array[index + 1] != null){
        result.push(array[index] + array[index + 1])
        } else {
        result.push(array[index])
        }
    }
    */

    return result
}

function nameHref(array){
    let result = []

    result = array.map((name) => `<a href=""${name}</a>`)

    result.push("</nav>")
    result.unshift("<nav>")
    result.join("")

    return result
}

function twoColTable(array){
    let result = []

    result = persons.map((person) => `<td>${person.name}</td><td>${person.phone}</td>`)

    result.unshift('<tr>')
    result.push('</tr>')
    result.join("")

    return result
}

function myMapper(array, callback){
    return callback(array)
}

//console.log(myMapper(numbers, addArr))
//console.log(myMapper(names, nameHref))
//console.log(myMapper(persons, twoColTable))