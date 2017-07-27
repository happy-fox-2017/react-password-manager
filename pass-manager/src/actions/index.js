import axios from 'axios'

export const getPassword = (allPasses) => {
  return {
    type: 'GET_PASSWORD',
    payload: {
      passManager: allPasses
    }
  }
}

export const postPasswordToApi = (username, password, url) => {
  return (dispatch) => {
    const apiUrl = 'http://localhost:3000/users'
    axios.post(apiUrl, {
      username: username,
      password: password,
      url: url,
      created_at: date_converter(),
      updated_at: date_converter()
    })
    .then(() => {
      dispatch(getPasswordFromApi())
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

export const getPasswordFromApi = () => {
  return (dispatch) => {
    const apiUrl = 'http://localhost:3000/users'
    axios.get(apiUrl)
      .then((results) => {
        dispatch(getPassword(results.data))
      })
      .catch(err => {
        console.log(err);
      })
  }
}

function date_converter () {
 var d = new Date();
   var m_names = new Array("January", "February", "March",
   "April", "May", "June", "July", "Augustus", "Sepetember",
   "October", "November", "December");
   var date = d.getDate();
   var month = m_names[d.getMonth()];
   var year = d.getFullYear();
   return `${date} ${month} ${year}`;
}