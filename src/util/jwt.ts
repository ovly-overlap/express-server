// utils/jwt.ts
import jwt from 'jsonwebtoken';

export const generateToken = (payload) => {
  return jwt.sign(payload, 'SECRET_KEY', { expiresIn: '1h' })
}

export const verifyToken = (token) => {
  return jwt.verify(token, 'SECRET_KEY')
}