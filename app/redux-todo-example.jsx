const redux = require('redux')

console.log('Starting redux todo app')

const stateDefault = {
    searchText: '',
    showComplete: false,
    todos: []
}

const reducer = (state: object = stateDefault, action: object) => {
    switch (action.type) {
        case 'CHANGE_SEARCHTEXT':
            return {
                ...state,
                searchText: action.searchText
            }
        default:
            return state
    }
    return state
}

let store = redux.createStore(reducer)

let currentState = store.getState()
console.log('currentState', currentState)

store.dispatch({
    type: 'CHANGE_SEARCHTEXT',
    searchText: 'some search text'
})

console.log('newState', store.getState())
