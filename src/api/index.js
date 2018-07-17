import axios from './interceptor.js'
import config from '../config'

export default {
  get(url, data = null) {
    if (!url) {
      console.log('API function call requires url argument')
      return
    }
    return axios.get(url, {
      params: data
    })
  },
  post(url, data = null) {
    if (!url) {
      console.log('API function call requires url argument')
      return
    }

    return axios.post(url, data)
  }
}