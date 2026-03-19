// utils/jwt.ts
import jwt from 'jsonwebtoken';

export const generateToken = (payload: any) => {
  return jwt.sign(payload, 'SECRET_KEY', { expiresIn: '1h' })
}

export const verifyToken = (token: any) => {
  return jwt.verify(token, 'SECRET_KEY')
}