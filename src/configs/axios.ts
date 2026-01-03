import { clearToken } from '@/utils/common'
import axios, { type InternalAxiosRequestConfig } from 'axios'
const BASE_URL = import.meta.env.VITE_API_BASE_URL || ''
import Cookies from 'js-cookie'

export const apiAxios = axios.create({
  baseURL: BASE_URL,
  timeout: 30000, //30s,
  // withCredentials: true,
})

apiAxios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('accessToken')
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

apiAxios.interceptors.response.use(
  response => {
    return response
  },
  async error => {
    if (error?.response?.status === 403) {
      clearToken()
      return Promise.reject(error)
    }

    if (error?.response?.status === 401) {
      const refreshToken = Cookies.get('refreshToken')
      if (!refreshToken) {
        clearToken()
        return Promise.reject(error)
      }

      try {
        const response = await apiAxios.post(`${BASE_URL}/auth/refresh-token`, {
          token: refreshToken,
        })
        const { accessToken, refreshToken: newRefreshToken } = response.data
        Cookies.set('refreshToken', newRefreshToken)
        localStorage.setItem('accessToken', accessToken)
      } catch (errr) {
        clearToken()
        return Promise.reject(errr)
      }
    }
    return Promise.reject(error)
  },
)
