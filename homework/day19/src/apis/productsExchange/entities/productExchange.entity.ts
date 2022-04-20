import { ProductOrder } from 'src/apis/productsOrder/entities/productOrder.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductExchange {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  exchangeissue: string;

  @ManyToOne(() => ProductOrder)
  productOrder: ProductOrder;
}
