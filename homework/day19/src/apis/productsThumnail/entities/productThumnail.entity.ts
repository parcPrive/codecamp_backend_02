import { Product } from 'src/apis/products/entities/product.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductThumnail {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  imageurl: string;

  @Column()
  imagecheck: string;

  @ManyToOne(() => Product)
  product: Product;
}
