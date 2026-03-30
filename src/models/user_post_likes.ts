import {BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table} from "sequelize-typescript";
import Posts from "./posts.ts";
import Users from "./users.ts";

@Table({
    tableName: "user_post_likes"
})
class UserPostLikes extends Model{
    @PrimaryKey
    @ForeignKey(()=>Posts)
    @Column
    post_id!: number; 
    
    @PrimaryKey
    @ForeignKey(()=>Users)
    @Column
    user_id!: number;
    
    @BelongsTo(()=>Posts, "post_id")
    post!: Posts;
    
    @BelongsTo(()=>Users, "user_id")
    user!: Users;
}

export default UserPostLikes; 