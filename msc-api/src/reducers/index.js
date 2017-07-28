import { combineReducers } from 'redux'

import passwordReducer from "./PasswordReducer"

export default combineReducers({
  passwordState: passwordReducer
})
