import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductCart {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
