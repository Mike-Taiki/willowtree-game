import type { AxiosInstance } from 'axios'
import axios from 'axios'

class Http {
  _http: AxiosInstance

  constructor() {
    this._http = axios.create({
      baseURL: 'https://namegame.willowtreeapps.com/api/v1.0',
      timeout: 3000
    })
  }

  getInstance() {
    return this._http
  }
}

export const http = new Http().getInstance()
