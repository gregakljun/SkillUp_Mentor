import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Comment } from "./comment.entity";

@Entity()
export class Topic {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title: string;

    @Column()
    description:string;

    @ManyToOne((type)=>Comment, (comment)=>comment.topic)
    comments: Comment[]
}