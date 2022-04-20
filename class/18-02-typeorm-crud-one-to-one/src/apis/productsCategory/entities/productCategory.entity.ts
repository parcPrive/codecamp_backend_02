import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class ProductCategory {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column({ unique: true, nullable: true }) //unique: true는 중복방지 nullable: true이건 빈값들어가도 된다.
  @Field(() => String)
  name: string;
}
