import PATH from '@/routers/paths'
import Cookies from 'js-cookie'

export const clearToken = () => {
  localStorage.removeItem('accessToken')
  Cookies.remove('refreshToken')
  window.location.href = PATH.LOGIN
}
