import { API_HOST, API_ENTRY_POINT } from 'react-native-dotenv'
import axios from 'axios'

const BASE_URL = `${API_HOST}${API_ENTRY_POINT}`

export const api = path => {
  return axios(`${BASE_URL}/${path}`)
}
