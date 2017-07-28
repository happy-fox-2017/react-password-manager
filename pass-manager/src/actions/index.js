import axios from 'axios'

export const getPassword = (allPasses) => {
  return {
    type: 'GET_PASSWORD',
    payload: {
      passManager: allPasses
    }
  }
}

export const postPassword = (e) => {
  e.preventDefault()
  alert('masuk action')
  return (dispatch, getState) => {
    let postItems = getState().form.simple.values
    alert('masuk mau ng post')
    dispatch(postPasswordToApi(postItems.username, postItems.password, postItems.url))
  }
}

export const postPasswordToApi = (username, password, url) => {
  console.log(username, password, url);
  alert('masuk di post')
  return (dispatch) => {
    alert('masuk mulai ng post')
    const apiUrl = 'http://localhost:3000/users'
    axios.post(apiUrl, {
      username: username,
      password: password,
      url: url,
      created_at: date_converter(),
      updated_at: date_converter()
    })
    .then(() => {
      alert('kelar ng post')
      dispatch(getPasswordFromApi())
    })
    .catch((err) => {
      alert('ngg bisa ng post')
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
   var m_names = ["January", "February", "March",
   "April", "May", "June", "July", "Augustus", "Sepetember",
   "October", "November", "December"];
   var date = d.getDate();
   var month = m_names[d.getMonth()];
   var year = d.getFullYear();
   return `${date} ${month} ${year}`;
}