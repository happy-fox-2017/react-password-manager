import { combineReducers } from 'redux';
import password_manager_reducer from './password_manager_reducer';


export default combineReducers({
  passwordManager: password_manager_reducer
});