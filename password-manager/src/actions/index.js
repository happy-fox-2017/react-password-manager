import Axios from 'axios'
export const PasswordGetter = () => {
  return {
    type: 'getPassword',
    payload: Axios.get('http://localhost:3000/password')
  }
}
