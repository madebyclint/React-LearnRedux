// SearchText reducer and action generators
// ---------------------------------
export let searchTextReducer = (state: string = '', action: object) => {
    switch (action.type) {
        case 'CHANGE_SEARCHTEXT':
            return action.searchText
        default:
            return state
    }
}

// Todos reducer and action generators
// ---------------------------------
export let todosReducer = (state: array = [], action: object) => {
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

// Map reducer and action generators
// ---------------------------------
export let mapReducer = (state: array = {isFetching: false, url: undefined}, action: object) => {
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
