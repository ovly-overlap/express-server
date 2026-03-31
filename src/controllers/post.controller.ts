import * as postService from "../services/post.service.ts";
import {Request, Response} from "express";

// TODO : 데이터 유효성 확인 & 데이터 안정성 확인
// TODO : 예전에 누른 하트 포스트 뜨게 하기

export const toggleLikePost = async (req: Request, res:Response) =>{
    const isUserLiked = postService.toggleLikePost(Number(req.params.postId), req.user.id);
    res.json(isUserLiked);
}

export const getLikedUsersAll = async (req: Request, res: Response) =>{
    const cursor = req.params.cursor ? Number(req.params.cursor) : undefined;
    const limit = req.params.limit ? Number(req.params.limit) : 10;
    const postId = Number(req.params.postId);
    const likedUsersinPost = await postService.getLikedUserAll(postId, cursor, limit);
    res.json(likedUsersinPost);
}

export const createPost = async (req: Request, res: Response) => {
    // TODO : 정규식 이용해서 게시글 카테고리 분류
    // TODO : 사진 관련 처리
    try{
        const isCreatedPost = postService.createPost(req.user.id);
        res.json(isCreatedPost);
    } catch (e){
        res.json(e);
    }
}

export const getPostOne = async (req: Request, res: Response) => {
    const userId = req.user.id;
    const postId = Number(req.params.postId);

    const post = await postService.getPostOne(userId, postId);
    res.json(post);
}

// TODO : 클라이언트 간 > 커서 단위로 무한 스크롤 확인
// TODO : 가져올때 사용자가 좋아요 눌렀는지 확인 하기
export const getPostAll = async (req: Request, res: Response) => {
    const cursor = req.params.cursor ? Number(req.params.cursor) : undefined;
    const limit = req.params.limit ? Number(req.params.limit) : 10;

    const posts = await postService.getPostAll(cursor, limit); // 오류 가능성
    res.json(posts);
}

// TODO : try-catch해서 안정성
export const updatePost = async (req:Request, res:Response) => {
    const userId = req.user.id;
    const postId = Number(req.params.postId);
    const {title, content} = req.body;

    const updatedPost = await postService.updatePost({
        postId, userId, title, content
    });
    res.json(updatedPost);
}

export const deletePost = async (req: Request, res: Response) => {
    const postId = Number(req.params.postId);
    try{
        let isDeleted = await postService.deletePost(postId, req.user.id);
        res.json(isDeleted);
        
    } catch (e){
        res.json(e);
    }
}

// TODO : 유저의 블락 테이블을 만들어야하나.. 
// export const blockPost = async (req: Response, res: Response) => {

// }
