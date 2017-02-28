const redux = require('redux')

console.log('Starting redux todo app')

const stateDefault = {
    searchText: '',
    showComplete: false,
    todos: []
}

const reducer = (state: object = stateDefault, action: string) => {
    return state
}

let store = redux.createStore(reducer)

console.log(reducer)
let currentState = store.getState()
console.log('currentState', currentState)
