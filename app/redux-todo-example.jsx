const redux = require('redux')
const axios = require('axios')

console.log('Starting redux todo app')

let nextTodoId = 1

let actions = require('./actions/index')
let store = require('./store/configureStore').configure()

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

actions.fetchLocation()

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

store.dispatch(actions.changeSearchText('some search text'))
store.dispatch(actions.changeSearchText('different search text'))
store.dispatch(actions.changeSearchText('more things to search'))

// unsubscribe()

// store.dispatch({
//     type: 'ADD_TODO',
//     todo: 'Go exercise'
// })

// store.dispatch({
//     type: 'ADD_TODO',
//     todo: 'Go to the movies'
// })

store.dispatch(actions.addTodo('Go exercise'))
store.dispatch(actions.addTodo('Go to the movies'))

// store.dispatch({
//     type: 'REMOVE_TODO',
//     id: 2
// })

store.dispatch(actions.removeTodo(2))


