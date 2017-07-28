const initialState = {
  StorePassword: "",
  StoreAddPassword: []
}

export default (state= initialState, action) => {

  switch (action.type) {
    case 'getPassword_PENDING':
      return {StorePassword: "wait"}
    case 'getPassword_REJECTED':
      return {StorePassword: "Your Data is Rejected!"}
    case 'getPassword_FULFILLED':
      return {StorePassword: action.payload.data}
    case 'getPassword_PENDING':
      return {StoreAddPassword: "wait"}
    case 'getPassword_REJECTED':
      return {StoreAddPassword: "Your Data is Rejected!"}
    case 'getPassword_FULFILLED':
      return {StoreAddPassword: action.payload.data}
    case 'fetchPassword':
      return {...state, StorePassword: action.payload.passwordData}
    default:
      return state
  }
}
