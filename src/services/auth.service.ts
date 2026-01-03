import { BaseService } from './base.service'

class AuthService extends BaseService {
  constructor(baseURL: string = import.meta.env.NEXT_PUBLIC_API_URL || '') {
    super()
    this.baseURL = baseURL
  }

  async login(payload: any): Promise<Object> {
    const res = await this.post(`${this.baseURL}/auth/login`, payload)
    return res.data
  }
}

export default AuthService
