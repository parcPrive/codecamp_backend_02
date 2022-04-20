import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductDetail {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  season: string;

  @Column()
  gender: string;

  @Column()
  size: string;

  @Column()
  origin: string;
}
