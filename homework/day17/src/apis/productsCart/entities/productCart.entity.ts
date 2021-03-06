import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class ProductCart {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;
}
