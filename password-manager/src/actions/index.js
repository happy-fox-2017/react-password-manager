import Axios from 'axios'
import chance from 'chance'

export const PasswordGetter = () => {
  return {
    type: 'getPassword',
    payload: Axios.get('http://localhost:3000/password')
  }
}

function date_converter (Tanggal) {
  var d = new Date(Tanggal);
  var m_names = new Array("January", "February", "March",
  "April", "May", "June", "July", "Augustus", "Sepetember",
  "October", "November", "December");
  var date = d.getDate();
  var month = m_names[d.getMonth()];
  var year = d.getFullYear();
  return `${date} ${month} ${year}`;
}

export const fetchPassword = (newListPassword) => {
  return {
    type: 'fetchPassword',
    payload: {
      passwordData: newListPassword
    }
  }
}

export const fetchPasswordAsync = (newPassword) => {
  return (dispatch, getState) => {
    const apiUrl = 'http://localhost:3000/password'
    Axios.post(apiUrl, {...newPassword, id: chance().guid(), created: date_converter(new Date()), updated: date_converter(new Date())})
      .then((resp) => {
        dispatch(PasswordGetter())
      })
      .catch((err) => {
        console.log(err)
      })
  }
}


export const DeleteListPassword = (id) => {
  return (dispatch, getState) => {
    const apiUrl = 'http://localhost:3000/password/'
    Axios.delete(apiUrl + id)
      .then((resp) => {
        console.log('sukses delete one listPassword');
        dispatch(PasswordGetter())
      })
      .catch((err) => {
        console.log(err)
      })
  }
}


export const getSearchByURL = (name) => {
  return(dispatch, getState) => {
    const apiUrl = 'http://localhost:3000/password?url='
    Axios.get(apiUrl + name)
      .then((resp) => {
        dispatch(fetchPassword(resp.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
