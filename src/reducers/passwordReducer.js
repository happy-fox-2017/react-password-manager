const initialState = {
  data: [],
  fetching: false,
  fetched: false,
  error: null,
  message: null
}

export default function passwordReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PASSWORD':
      return {...state, fetching: true, fetched: false}
    case 'FETCH_SUCCESS':
      return {...state, fetching: false, fetched: true, data: action.payload, error: null, message: 'fetch success'}
    case 'FETCH_ERROR':
      return {...state, fetching: false, fetched: true, error: action.payload}
    case 'DELETE_PASSWORD':
      return {...state, fetching: true, fetched: false}
    case 'DELETE_SUCCESS':
      return {...state, fetching: true, fetched: false, message: 'delete success', error: null}
    case 'DELETE_ERROR':
      return {...state, fetching: false, fetched: true, error: action.payload}
    case 'ADD_PASSWORD':
      return {...state, fetching: true, fetched: false}
    case 'ADD_SUCCESS':
      return {...state, fetching: false, fetched: true, message: 'add success', error: null}
    case 'ADD_ERROR':
      return {...state, fetching: false, fetched: true, error: action.payload}
    case 'UPDATE_PASSWORD':
      return {...state, fetching: true, fetched: false}
    case 'UPDATE_SUCCESS':
      return {...state, fetching: false, fetched: true, message: 'update success', error: null}
    case 'UPDATE_ERROR':
      return {...state, fetching: false, fetched: true, error: action.payload}
    default:
      return state
  }
}
