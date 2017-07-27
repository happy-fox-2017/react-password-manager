import { combineReducers } from 'redux'

import passwordReducer from './password_reducer'

export default combineReducers({
  getPass: passwordReducer
})