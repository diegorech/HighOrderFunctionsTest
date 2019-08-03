
const persons = [{
    name: 'Diego',
    age: 23
},
{
    name: 'Victor',
    age: 25
},
{
    name: 'Pedro',
    age: 10
},
{
    name: 'Gab',
    age: 15
},
{
    name: 'Lucas',
    age: 34
}]


//older way
// First-Class Functions
let fullAgePeop = []

for( person of persons ) {
    if( person.age >= 18 ) {
        fullAgePeop.push( person )
    }
}
console.log(fullAgePeop)


//newest way
//High-Order Functions with ECS6

let lowAgePeop = persons.filter((person) => person.age < 18)

console.log(lowAgePeop)




//a function that create an array of integers that represents the lenght of each strings of an array of strings

let string = ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'React']


function convertStr(strings) {  
    let integers = []   
    for( str of strings) {
        integers.push(str.length)
    }
    return integers
}
let result = convertStr(string)
console.log(result)


//my own High-Ordered Function

let words = ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'React']


function mapForEach(strings, cb) {  
    let arr = []   
    for( str of strings) {
        arr.push(cb(str))
    }
    return arr
}
let lengthMap = mapForEach(words, ( item ) => item.length)
console.log(lengthMap)