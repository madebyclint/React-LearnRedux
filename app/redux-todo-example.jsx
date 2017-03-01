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

let store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

// subscribe to changes
let unsubscribe = store.subscribe(() => {
    // subcribe() returns a function to unsubscribe
    let state = store.getState()
    console.log('SearchText is', state.searchText)
})

let currentState = store.getState()
console.log('currentState', currentState)

store.dispatch({
    type: 'CHANGE_SEARCHTEXT',
    searchText: 'some search text'
})

store.dispatch({
    type: 'CHANGE_SEARCHTEXT',
    searchText: 'different search terms'
})

unsubscribe()

store.dispatch({
    type: 'CHANGE_SEARCHTEXT',
    searchText: 'more things to search'
})
