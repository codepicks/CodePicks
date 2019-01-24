import { API_HOST, API_ENTRY_POINT } from 'react-native-dotenv'
import axios from 'axios'

console.log(API_HOST)

const BASE_URL = `${API_HOST}${API_ENTRY_POINT}`

export const _api = (path, params) => {
  return axios(`${BASE_URL}/${path}`, params)
}

export const get = (path, params) => {
  return _api(path, {
    method: 'GET',
    data: params,
  })
}

export const post = (path, params) => {
  return _api(path, {
    method: 'POST',
    data: params,
  })
}
