const initialState = {
  password_manager: [],
  password_detail: [],
  action_password_manager: []
}

const pmReducer = (state=initialState, action) => {
  switch (action.type) {
    case "GET_PASSWORD_MANAGER":
      return {...state, password_manager: action.payload.password_manager}
    case "GET_PASSWORD_BY_ID":
      return {...state, password_detail: action.payload.password_manager_detail}
    case "CHANGE_ACTION" : 
      return {...state, action_password_manager: action.payload.action_password_manager}
    default:
      return state 
  }
}

export default pmReducer