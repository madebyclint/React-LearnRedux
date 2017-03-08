const redux = require('redux')
import ReduxThunk from 'redux-thunk'
let {searchTextReducer, todosReducer, mapReducer} = require('../reducers/index')

export let configure = () => {
    let reducer = redux.combineReducers({
        searchText: searchTextReducer,
        todos: todosReducer,
        map: mapReducer
    })

    let store = redux.createStore(reducer, redux.compose(
        redux.applyMiddleware(ReduxThunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ))

    return store
}
