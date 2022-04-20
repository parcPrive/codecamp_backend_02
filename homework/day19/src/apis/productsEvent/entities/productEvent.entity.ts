import { Product } from 'src/apis/products/entities/product.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductEvent {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  timesale: string;

  @ManyToOne(() => Product)
  product: Product;
}
