// services/auth.service.ts
import * as userRepository from '../repository/user.repository.ts';
import { SignupRequestDTO } from '../dto/signupReq.dto.ts';

import bcrypt from 'bcrypt';
import { generateToken } from '../util/jwt.ts';

// TODO : (data: SignupRequestDTO) 으로 변경 후 테스트
export const register = async (data: { email: string; password: any; }) => {
  const existing = await userRepository.findByEmail(data.email)
  if (existing) {
    throw new Error('이미 존재하는 유저');
  }
  const hashedPassword = await bcrypt.hash(data.password, 10)

  return await userRepository.createUser({
    ...data,
    password: hashedPassword,
  });
}

export const login = async ({ email, password }) => {
  const user = await userRepository.findByEmail(email);
  if (!user) throw new Error('유저 없음');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('비밀번호 틀림');

  const token = generateToken({ id: user.id });
  return { token };
}