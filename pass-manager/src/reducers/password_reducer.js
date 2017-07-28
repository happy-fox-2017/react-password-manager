const initialState = {
  passManager: []
}

const passwordReducer = (state=initialState, actions) => {
  switch (actions.type) {
    case 'GET_PASSWORD':
      return {...state, passManager: actions.payload.passManager}
      // return {...state, passManager: actions.payload.passManager}
    default:
      return state
  }
}

export default passwordReducer