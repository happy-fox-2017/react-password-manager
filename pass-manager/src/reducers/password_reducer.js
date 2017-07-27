const initialState = {
  passManager: {
    username: '',
    url: '',
    password: '',
    created_at: '',
    updated_at: ''
  }
}

const passwordReducer = (state=initialState, actions) => {
  switch (actions.type) {
    case 'GET_PASSWORD':
      return {...state, passManager: actions.payload.passManager}
    default:
      return state
  }
}

export default passwordReducer