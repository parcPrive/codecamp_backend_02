import { Field, ObjectType } from '@nestjs/graphql';
import { Profile } from 'src/apis/profile/entities/profile.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  //@Field()
  pw: string;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  phone: string;

  @Column()
  @Field()
  address: string;

  @Column()
  @Field()
  person: string;

  @DeleteDateColumn()
  deletedAt: Date;

  // @JoinColumn()
  // @Field()
  // @OneToOne(() => Profile)
  // profile: Profile;
}
