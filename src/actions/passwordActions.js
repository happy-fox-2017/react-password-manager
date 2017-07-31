import Axios from 'axios'

const API = 'http://localhost:3001/Passwords'

export const fetchPassword = () => {
  return dispatch => {
    dispatch({type: 'FETCH_PASSWORD'})
    Axios.get(API)
      .then((res) => {
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: res.data
        })
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_ERROR',
          payload: error
        })
      })
  }
}

export const deletePassword = (id) => {
  return dispatch => {
    console.log(id, "ID")
    dispatch({type: 'DELETE_PASSWORD'})
    Axios.delete(API + "/" + id)
      .then((res) => {
        dispatch({
          type: 'DELETE_SUCCESS',
          payload: res.data
        })
      })
      .then(() => {
        dispatch(fetchPassword())
      })
      .catch((error) => {
        dispatch({
          type: 'DELETE_ERROR',
          payload: error
        })
      })
  }
}

export const addPassword = (newPassword) => {
  return dispatch => {
    dispatch({type: 'ADD_PASSWORD'})
    Axios.post(API, newPassword)
      .then((res) => {
        dispatch({
          type: 'ADD_SUCCESS',
          payload: res.data
        })
      })
      .catch((error) => {
        dispatch({
          type: 'DELETE_ERROR',
          payload: error
        })
      })
  }
}

export const updatePassword = (id, newPassword) => {
  return dispatch => {
    dispatch({type: 'UPDATE_PASSWORD'})
    Axios.put(API+ "/" + id, newPassword)
      .then((res) => {
        dispatch({
          type: 'UPDATE_SUCCESS',
          payload: res.data
        })
      })
      .catch((error) => {
        dispatch({
          type: 'UPDATE_ERROR',
          payload: error
        })
      })
  }
}
