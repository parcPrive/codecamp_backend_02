import { ProductDetail } from 'src/apis/productsDetail/entities/productDetail.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductColor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  color: string;

  @ManyToOne(() => ProductDetail)
  productDetail: ProductDetail;
}
