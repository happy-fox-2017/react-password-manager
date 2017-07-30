import Axios from 'axios'

const API = 'http://localhost:3001/Passwords'

// export function fetchUser(username) {
//   let url = `${API}/${username}`;
//   return function(dispatch) {
//     dispatch({type: 'FETCH_USER'})
//     fetch(url)
//       .then((res) => res.json() )
//       .then((data) => {
//         dispatch({
//           type: 'FETCH_SUCCESS',
//           payload: data
//         })
//       })
//       .catch((error) => {
//         dispatch({
//           type: 'FETCH_ERROR',
//           payload: error
//         })
//       })
//   }
// }

export const fetchPassword = () => {
  return dispatch => {
    dispatch({type: 'FETCH_PASSWORD'})
    Axios.get(API)
      .then((data) => {
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: data
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
