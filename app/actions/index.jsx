const axios = require('axios')

export let changeSearchText = (searchText: string) => {
    return {
        type: 'CHANGE_SEARCHTEXT',
        searchText
    }
}

export let addTodo = (todo: array) => {
    return {
        type: 'ADD_TODO',
        todo
    }
}

export let removeTodo = (id: string) => {
    return {
        type: 'REMOVE_TODO',
        id
    }
}

export let startLocationFetch = () => {
    return {
        type: 'START_LOCATION_FETCH'
    }
}

export let completeLocationFetch = (url: string) => {
    return {
        type: 'COMPLETE_LOCATION_FETCH',
        url
    }
}

export let fetchLocation = () => {
    return (dispatch, getState) => {
        dispatch(startLocationFetch())
        axios.get('https://ipinfo.io').then(function (res) {
            let loc = res.data.loc
            let baseUrl = 'http://maps.google.com?q='
            dispatch(completeLocationFetch(baseUrl + loc))
        })
    }
}
