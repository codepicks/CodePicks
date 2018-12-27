import { Platform } from 'react-native'
import { API_HOST, API_ENTRY_POINT, API_HOST_PRODUCTION } from 'react-native-dotenv'
import axios from 'axios'

let HOST = API_HOST
if (Platform.OS === 'android' && __DEV__) {
  HOST = API_HOST_PRODUCTION
}

const BASE_URL = `${HOST}${API_ENTRY_POINT}`

export const api = path => {
  return axios(`${BASE_URL}/${path}`)
}
