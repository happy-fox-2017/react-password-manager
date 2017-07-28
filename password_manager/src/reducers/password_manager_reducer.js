const initialState = {
  password_manager: []
}

const pmReducer = (state=initialState, action) => {
  switch (action.type) {
    case "GET_PASSWORD_MANAGER":
      return {...state, password_manager: action.payload.password_manager}
      break;
    default:
      return state 
  }
}

export default pmReducer