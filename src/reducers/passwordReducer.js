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
    default:
      return state
  }
}
