import axios from 'axios'
const baseUrl = 'http://129.158.42.32:3001/api/blogs'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default {
  getAll
}
