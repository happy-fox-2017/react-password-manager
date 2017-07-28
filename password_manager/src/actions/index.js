import axios from 'axios'

export const getPasswordManager = (data) => {
  return {
    type: 'GET_PASSWORD_MANAGER',
    payload: {
      password_manager: data
    }
  }
}

export const deletePasswordManager = (id) => {
  return (dispatch,getState) => {
    const apiUrl = `http://localhost:3000/password_manager/${id}`
    axios.delete(apiUrl)
    .then(res => {
      dispatch(getPasswordManagerAsync())
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export const postPasswordManagerAsync = (data) => {
  return (dispatch,getState) =>  {
    const apiUrl = 'http://localhost:3000/password_manager'
    axios.post(apiUrl, {...data, createdAt: new Date(), updatedAt: new Date()})
    .then(res => {
      dispatch(getPasswordManagerAsync())
    })
    .catch(err => {
      console.log(err)
    })
  }
}


export const getPasswordManagerAsync = () => {
  return (dispatch, getState) => {
    const apiUrl = 'http://localhost:3000/password_manager'
    axios.get(apiUrl)
    .then(data => {
      dispatch(getPasswordManager(data.data))
    })
    .catch(err => {
      console.log(err)
    })
  }
}