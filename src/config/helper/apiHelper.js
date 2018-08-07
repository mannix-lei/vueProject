import axios from 'axios'
import Config from './config'
import Cookie from 'vue-cookies'

let token = Cookie.get('token')

let api = axios.create({
  baseURL: Config.apiBaseUrl,
  headers: {'Authorization': 'Bearer' + token},
  responseType: 'json',
  timeout: 10000
})
export {api}
