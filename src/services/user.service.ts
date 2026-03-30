import * as userRepository from "../repository/user.repository.ts";

export const createUser = async (data: string) => {
  const existing = await userRepository.findByEmail(data.email)

  if (existing) {
    throw new Error('이미 존재하는 유저')
  }

  return await userRepository.createUser(data)
}

/**
 * 
 * const liked = await UserPostLikes.findOne({
  where: {
    user_id,
    post_id
  },
  attributes: ['user_id'] // 최소 데이터만
});

const isLiked = !!liked;

--

const count = await UserPostLikes.count({
  where: { user_id, post_id }
});

const isLiked = count > 0;
 */