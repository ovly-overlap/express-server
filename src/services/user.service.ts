import userRepository from "../repository/user.repository.ts";

export const createUser = async (data: string) => {
  const existing = await userRepository.findByEmail(data.email)

  if (existing) {
    throw new Error('이미 존재하는 유저')
  }

  return await userRepository.createUser(data)
}