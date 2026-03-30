import Posts from "../models/posts.ts";
import UserPostLikes from "../models/user_post_likes.ts";
import Users from "../models/users.ts";

import {col, fn, Op} from "sequelize";

interface UpdatePostDto {
  postId: number;
  userId: number;
  title: string;
  content: string;
}

export const likePost = async (postId: number, userId: number) =>{
    // 기존에 내가 눌렀는지 확인
    const isUserLiked = await UserPostLikes.findOne({where:{post_id:postId, user_id:userId}})
    if(isUserLiked){
        await isUserLiked.destroy();
        await Posts.decrement("post_likes_count", {where: {id: postId}});
        return {liked: false};
    }

    await UserPostLikes.create({where: {post_id:postId, user_id:userId}});
    await Posts.increment("post_likes_count", {where:{id:postId}});
    return {liked: true}; 
}

export const createPost = async (userId: number) =>{
    // TODO : 유저 게시글의 카테고리 정규화해서 테이블에 넣기
    // TODO : 게시글 제목, 내용, 사진 검토
    if(await Users.findByPk(userId)){throw new Error("not exist user")};
    return await Posts.findOrCreate({where: {id:userId}});
}

export const getPostOne = async (postId: number, userId: number) =>{
    return await Posts.findByPk(postId, {
        include:[
            {
                model: Users,
                as: "likedUsers",
                attributes: ["id"],
                through: {attributes: []}
            }
        ]
    })
    // const posts = await Posts.findAll({
    //     attributes:[
    //         "id", "title", [fn("COUNT", col("likedUsers.id")), "likeCount"]
    //     ],
    //     include: [
    //         {
    //             model: Users,
    //             as: "likeUsers",
    //             attributes: [],
    //             through: { attributes:[] }
    //         }
    //     ],
    //     group: ["posts.id"]
    // });
}

export const getPostAll = async (cursor?: number, limit: number = 10) => {
    // TODO : 최다 노출 알고리즘 > 댓글이랑 하트수로 노출 파라미터가 정해짐
    const where = cursor ? {id: {[Op.lt]: cursor}} : {};
    const posts = await Posts.findAll({
        where, order: [["id", "DESC"]], limit
    });
    return posts;
}

export const updatePost = async (dto : UpdatePostDto) => {
    const {postId, userId, ...updateData} = dto;
    const [isUpdated] = await Posts.update(updateData, {
        where: {
            id:postId, 
            user_id:userId
        }
    });
    if(isUpdated===0) throw new Error("not found User or Auth");

    return await Posts.findByPk(postId);
}

export const deletePost = async (postId: number, userId: number) => {
    let post = await Posts.findByPk(postId);
    if(post.user_id === userId){
        return await Posts.destroy({where: {id:postId}})
    }
    if (!post) {
        throw new Error("Post not found");
    }
    await post.destroy();

    return true;
}
    