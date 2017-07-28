import { combineReducers } from 'redux'
import { reducer as reducerForm } from 'redux-form';

import passwordReducer from './password_reducer'

export default combineReducers({
  form: reducerForm,
  getPass: passwordReducer
})
