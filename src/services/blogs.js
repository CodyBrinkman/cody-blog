import axios from 'axios'
const baseUrl = 'http://10.100.0.44:3001/api/blogs'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default {
  getAll
}
