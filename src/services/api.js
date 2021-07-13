import axios from 'axios'

const api  = axios.create({
  baseURL: 'https://botoxb-be.herokuapp.com/api/auth/login',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api