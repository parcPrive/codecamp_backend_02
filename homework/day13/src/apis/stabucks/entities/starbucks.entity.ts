import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, Column } from 'typeorm';

@Entity()
@ObjectType()
export class Starbucks {
  @Column()
  @Field(() => String)
  menu: string;

  @Column()
  @Field(() => String)
  price: string;

  @Column()
  @Field(() => String)
  kcal: string;

  @Column()
  @Field(() => String)
  fat: string;

  @Column()
  @Field(() => String)
  protein: string;

  @Column()
  @Field(() => String)
  sodium: string;

  @Column()
  @Field(() => String)
  sugar: string;

  @Column()
  @Field(() => String)
  caffeine: string;
}
