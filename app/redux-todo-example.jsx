const redux = require('redux')

console.log('Starting redux todo app')

const reducer = (state = {
    searchText: '',
    showComplete: false,
    todos: []
}, action) => {
    return state
}

let store = redux.createStore(reducer)
let currentState = store.getState()
console.log('currentState', currentState)
