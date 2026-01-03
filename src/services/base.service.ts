import type { AxiosInstance } from 'axios'
import { apiAxios } from '../configs/axios'

export abstract class BaseService {
  protected baseURL: string
  private axiosInstance: AxiosInstance

  constructor() {
    let apiURL = import.meta.env.NEXT_PUBLIC_BASE_API_URL || ''
    this.baseURL = apiURL
    this.axiosInstance = apiAxios
  }

  get(url: string, params = {}, config = {}) {
    return this.axiosInstance.get(url, { ...params, ...config })
  }

  post(url: string, data = {}, config = {}) {
    return this.axiosInstance.post(url, data, config)
  }

  put(url: string, data = {}, config = {}) {
    return this.axiosInstance.put(url, data, config)
  }

  patch(url: string, data = {}, config = {}) {
    return this.axiosInstance.patch(url, data, config)
  }

  delete(url: string, data?: any, config = {}) {
    return this.axiosInstance.delete(url, { data, ...config })
  }
}
