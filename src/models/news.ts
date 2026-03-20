import 'reflect-metadata';
import {Table, Model, Column, DataType, Default, PrimaryKey, AutoIncrement, DeletedAt} from 'sequelize-typescript';

interface NewsAttributes{
    id: number;
    article_title: string;
    article_source: string;
    article_image_url: string;
    content: string;
    click_count: number;
    scrolled_at: Date;
    deleted_at: Date;
}

// interface NewsCreationAttributes extends Optional<NewsAttributes, 'id'>{}

@Table({
    tableName: 'news',
    timestamps: true,
})
class News extends Model<NewsAttributes>{ //  implements  NewsAttributes
    @Column({type:DataType.INTEGER})
    @PrimaryKey
    @AutoIncrement
    id!: number;
    
    @Column({type:DataType.STRING})
    article_title!: string;
    
    @Column({type:DataType.STRING})
    article_source!: string;

    @Column({type:DataType.STRING})
    article_image_url!: string;

    @Column({type:DataType.TEXT})
    content!: string;

    @Column({type:DataType.SMALLINT})
    @Default(0)
    click_count!: number;

    @Column({type:DataType.DATE})
    scrolled_at!: Date;

    @DeletedAt
    deleted_at!: Date;
}

export default News;