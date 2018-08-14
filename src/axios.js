import axios from 'axios'

// function getToket() {
//   return '123'
// }

const instance = axios.create({
  baseURL: 'http://localhost:3000'
  //headers: { 'Authorization': `Bearer ${getToket()}` }
})

export default instance
