const initialState = {
  StorePassword: "",
  StoreAddPassword: []
}

export default (state= initialState, action) => {
  console.log('this is action: -> ', action);
  console.log('this is state: -> ', state);

  switch (action.type) {
    case 'getPassword_PENDING':
      return {StorePassword: "wait"}
      break;
    case 'getPassword_REJECTED':
      return {StorePassword: "Your Data is Rejected!"}
      break;
    case 'getPassword_FULFILLED':
      return {StorePassword: action.payload.data}
      break;
    case 'getPassword_PENDING':
      return {StoreAddPassword: "wait"}
      break;
    case 'getPassword_REJECTED':
      return {StoreAddPassword: "Your Data is Rejected!"}
      break;
    case 'getPassword_FULFILLED':
      return {StoreAddPassword: action.payload.data}
      break;
    case 'fetchPassword':
      return {...state, StoreAddPassword: action.payload.passwordData}
    break;
    default:
      return state
  }
}
