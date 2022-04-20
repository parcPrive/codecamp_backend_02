import { ProductDetail } from 'src/apis/productsDetail/entities/productDetail.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductLike {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  grade: string;

  @Column()
  review: string;

  @Column()
  like: string;

  @Column()
  discountlist: string;

  @Column()
  discount: string;

  @Column()
  ranking: string;

  @Column()
  salesrate: string;

  @ManyToOne(() => ProductDetail)
  productDetail: ProductDetail;
}
