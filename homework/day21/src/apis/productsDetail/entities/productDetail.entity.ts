import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class ProductDetail {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  season: string;

  @Column()
  @Field(() => String)
  gender: string;

  @Column()
  @Field(() => String)
  size: string;

  @Column()
  @Field(() => String)
  origin: string;

  @Column()
  @Field(() => Int)
  stock: number;
}
