import { ProductOrder } from 'src/apis/productsOrder/entities/productOrder.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductRefund {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  refundissue: string;

  @Column()
  photo: string;

  @Column()
  photocheck: string;

  @ManyToOne(() => ProductOrder)
  productOrder: ProductOrder;
}
