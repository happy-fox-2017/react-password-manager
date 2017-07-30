const initialState = {
  data: [],
  fetching: false,
  fetched: false,
  error: null
}

export default function passwordReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PASSWORD':
      return {...state, fetching: true, fetched: false}
    case 'FETCH_SUCCESS':
      return {...state, fetching: false, fetched: true, data: action.payload, error: null}
    case 'FETCH_ERROR':
      return {...state, fetching: false, fetched: false, error: action.payload}
    default:
      return state
  }
}
