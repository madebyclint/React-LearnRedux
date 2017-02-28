// import not working for some reason
// import redux from 'redux'
const redux = require('redux')

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



// Redux example

// Reducer = pure function takes existing state and action as arguments and returns new state
// let store = redux.createStore(reducer)
// doesn't have to be called reducer - just for example
let reducer = (state: object = {name: 'Anonymous'}, action: string) => {
    // state = state || {name: 'Anonymous'} // ES 5 way
    return state
}
let store = redux.createStore(reducer)
let currentState = store.getState()
console.log('currentState', currentState)

