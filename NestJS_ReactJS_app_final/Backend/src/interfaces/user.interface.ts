export interface UserData {
  id: string
  first_name?: string
  last_name?: string
  email: string
  avatar?: string
  role?: { id: string; name: string }
}

export interface JwtType {
  accessToken: string
  refreshToken: string
}

export interface TokenPayload {
  userId: string
  email: string
}

export interface CookieType {
  name: string
  value: string
  options?: {
    httpOnly?: boolean
    secure?: boolean
    maxAge?: number
  }
}
