import redux from 'redux'

console.log('Starting redux example')


// Pure functions
// function add (a, b) {
//     return a + b
// }

// Not pure functions
// Relies on outside value
// var a = 3
// function add (b) {
//     return a + b
// }

// Not pure functions
// Not same every time ran
// function add (a, b) {
//     return a + b + new Date().getSeconds()
// }

// Not pure functions
// Changes outside object
// var result
// function add (a, b) {
//     result = a + b
//     return result
// }

// Not pure functions
// Can't change input variables
// Return new object/array instead of modifying exisiting one


// Pure functions are:
// Same input = same output everytime
// No async/promises
// Can't manipulate or rely on outside variables/objects/arrays/values
