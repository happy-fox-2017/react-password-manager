import axios from 'axios'

export const addPasswordManager = (password_manager_data) => {
  return {
    type: 'Add_password_manager',
    payload: {
      newPassword_Manager: password_manager_data
    }
  }
}