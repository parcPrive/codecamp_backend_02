import { ProductDetail } from 'src/apis/productsDetail/entities/productDetail.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductBrand {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  brandname: string;

  @ManyToOne(() => ProductDetail)
  productDetail: ProductDetail;
}
