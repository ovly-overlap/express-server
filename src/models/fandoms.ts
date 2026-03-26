import {AutoIncrement, Model, PrimaryKey, Table, Column} from "sequelize-typescript";

@Table({
    tableName: "fandoms"
})
class Fandoms extends Model{
    @AutoIncrement
    @PrimaryKey
    id!:number;

    @Column
    name!:string;

    @Column
    image_url!:string;
}

export default Fandoms;