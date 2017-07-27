import axios from 'axios'

export const getPassList = (passList) => {
  return {
    type: 'GET_PASS_LIST',
    payload: {
      passList: passList
    }
  }
}

export const getPassListAsyncHanlder = () => {
  return (dispatch) => {
    axios.get('http://localhost:3000/pass')
    .then((resp) => {
      dispatch(getPassList(resp.data))
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

export const addPass = (form) => {
  return {
    type: 'ADD_PASS',
    payload: {
      form: form
    }
  }
}

export const addPassAsyncHanlder = () => {
  return (dispatch) => {
    axios.post('http://localhost:3000/pass')
    .then((resp) => {
      dispatch(addPass(resp.data))
    })
    .catch((err) => {
      console.log(err)
    })
  }
}
