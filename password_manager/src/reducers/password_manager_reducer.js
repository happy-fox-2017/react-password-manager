const initialState = {
  password_manager: [""]
}

const pmReducer = (state=initialState, action) => {
  switch (action.type) {
    case "Add_password_manager":
      //di sini masih bingung gimana tarok nya
      console.log(action)
      break;
    default:
      return state 
  }
}