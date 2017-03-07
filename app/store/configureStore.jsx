const redux = require('redux')
const thunk = require('redux-thunk').default()
let {searchTextReducer, todosReducer, mapReducer} = require('../reducers/index')

export let configure = () => {
    let reducer = redux.combineReducers({
        searchText: searchTextReducer,
        todos: todosReducer,
        map: mapReducer
    })

    let store = redux.createStore(reducer, redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ))

    return store
}
