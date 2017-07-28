import axios from 'axios'

export const addPasswordManager = (password_manager_data) => {
  return {
    type: 'Add_password_manager',
    payload: {
      newPassword_Manager: password_manager_data
    }
  }
}

export const getPasswordManager = (data) => {
  return {
    type: 'GET_PASSWORD_MANAGER',
    payload: {
      password_manager: data
    }
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