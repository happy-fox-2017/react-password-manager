import axios from 'axios'

export const getPasswordManager = (data) => {
  return {
    type: 'GET_PASSWORD_MANAGER',
    payload: {
      password_manager: data
    }
  }
}

export const getPasswordManagerById = (data_detail) => {
  return {
    type: 'GET_PASSWORD_BY_ID',
    payload: {
      password_manager_detail: data_detail
    }
  }
}

export const changeAction = (act) => {
  return {
    type: 'CHANGE_ACTION',
    payload: {
      action_password_manager : act
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

//ini get by id
export const getByIdPasswordManager = (id) => {
  return (dispatch) => {
    const apiUrl = `http://localhost:3000/password_manager/${id}`
    axios.get(apiUrl)
    .then(data => {
      dispatch(getPasswordManagerById(data.data))
    })
    .catch(err => {
      console.log(err)
    })
  }
}


//Post Data
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

export const putPasswordManagerAsync = (id,data) => {
  console.log(data)
  return (dispatch) => {
    const apiUrl = `http://localhost:3000/password_manager/${id}`
    axios.put(apiUrl, {...data, updatedAt:new Date()})
    .then(res => {
      dispatch(getPasswordManagerAsync())
    })
    .catch(err => {
      console.log(err)
    })
  }
}

//get All
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