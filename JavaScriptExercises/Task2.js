let nameArr = ['Hassan', 'Jan', 'Peter', 'Boline', 'Frederik']

function sortFunction(array){
    let sortArr = []
    
    array.forEach(name => {
        if(name.includes('a')){
            sortArr.push(name)
        }
    })
    
    return sortArr
}

function reverseFunction(array){
    let reverseArr = []

    array.forEach(name => {
        reverseArr.push(name.split('').reverse().join(''))
    });

    return reverseArr
}

function myFilter(array, callback){
    return callback(array)
}

console.log(myFilter(nameArr, sortFunction))
console.log(myFilter(nameArr, reverseFunction))