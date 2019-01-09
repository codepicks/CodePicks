// import { API_HOST, API_ENTRY_POINT } from 'react-native-dotenv'
import axios from 'axios'

const API_HOST = 'https://codepicks.jp'
const API_ENTRY_POINT = '/api/v1'

const BASE_URL = `${API_HOST}${API_ENTRY_POINT}`

// eslint-disable-next-line
export const api = path => {
  return axios(`${BASE_URL}/${path}`)
}
