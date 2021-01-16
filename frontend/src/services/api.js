import axios from 'axios'

const restAPI = axios.create({
  baseURL: 'http://localhost:8000/api/v1/',
  headers: {
    'content-type': 'application/json'
  }
})

export const ErrorHandler = {
  reject: reason => Promise.reject(reason.response.data)
}

export default restAPI