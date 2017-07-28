import { combineReducers } from 'redux';
import password_manager_reducer from './password_manager_reducer';


export default password_manager_reducer({
  passwordManager: password_manager_reducer
});