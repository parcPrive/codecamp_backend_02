import { User } from 'src/apis/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class coupon {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  discountprice: number;

  @ManyToOne(() => User)
  user: User;
}
