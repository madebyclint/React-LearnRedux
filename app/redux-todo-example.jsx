const redux = require('redux')
const axios = require('axios')

console.log('Starting redux todo app')

let nextTodoId = 1

// SearchText reducer and action generators
// ---------------------------------
let searchTextReducer = (state: string = '', action: object) => {
    switch (action.type) {
        case 'CHANGE_SEARCHTEXT':
            return action.searchText
        default:
            return state
    }
}

let changeSearchText = (searchText: string) => {
    return {
        type: 'CHANGE_SEARCHTEXT',
        searchText
    }
}

// Todos reducer and action generators
// ---------------------------------
let todosReducer = (state: array = [], action: object) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: nextTodoId++,
                    todo: action.todo
                }
            ]
        case 'REMOVE_TODO':
            return state.filter((todo) => todo.id !== action.id)
        default:
            return state
    }
}

let addTodo = (todo: array) => {
    return {
        type: 'ADD_TODO',
        todo
    }
}

let removeTodo = (id: string) => {
    return {
        type: 'REMOVE_TODO',
        id
    }
}

// Map reducer and action generators
// ---------------------------------
let mapReducer = (state: array = {isFetching: false, url: undefined}, action: object) => {
    switch (action.type) {
        case 'START_LOCATION_FETCH':
            return {
                isFetching: true,
                url: undefined
            }
        case 'COMPLETE_LOCATION_FETCH':
            return {
                isFetching: false,
                url: action.url
            }
        default:
            return state
    }
}

let startLocationFetch = () => {
    return {
        type: 'START_LOCATION_FETCH'
    }
}

let completeLocationFetch = (url: string) => {
    return {
        type: 'COMPLETE_LOCATION_FETCH',
        url
    }
}

let fetchLocation = () => {
    store.dispatch(startLocationFetch())
    axios.get('https://ipinfo.io').then(function (res) {
        let loc = res.data.loc
        let baseUrl = 'http://maps.google.com?q='
        store.dispatch(completeLocationFetch(baseUrl + loc))
    })
}

let reducer = redux.combineReducers({
    searchText: searchTextReducer,
    todos: todosReducer,
    map: mapReducer
})

let store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

// subscribe to changes
let unsubscribe = store.subscribe(() => {
    // subcribe() returns a function to unsubscribe
    let state = store.getState()

    if (state.map.isFetching) {
        document.getElementById('app').innerHTML = 'Loading...'
    } else if (state.map.url) {
        document.getElementById('app').innerHTML = `<a href="${state.map.url}" target="_blank">View your location</a>`
    }
})

fetchLocation()

// store.dispatch({
//     type: 'CHANGE_SEARCHTEXT',
//     searchText: 'some search text'
// })

// store.dispatch({
//     type: 'CHANGE_SEARCHTEXT',
//     searchText: 'different search terms'
// })

// store.dispatch({
//     type: 'CHANGE_SEARCHTEXT',
//     searchText: 'more things to search'
// })

store.dispatch(changeSearchText('some search text'))
store.dispatch(changeSearchText('different search text'))
store.dispatch(changeSearchText('more things to search'))

// unsubscribe()

// store.dispatch({
//     type: 'ADD_TODO',
//     todo: 'Go exercise'
// })

// store.dispatch({
//     type: 'ADD_TODO',
//     todo: 'Go to the movies'
// })

store.dispatch(addTodo('Go exercise'))
store.dispatch(addTodo('Go to the movies'))

// store.dispatch({
//     type: 'REMOVE_TODO',
//     id: 2
// })

store.dispatch(removeTodo(2))


