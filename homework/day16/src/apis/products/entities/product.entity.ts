import { ProductCart } from 'src/apis/productsCart/entities/productCart.entity';
import { ProductDetail } from 'src/apis/productsDetail/entities/productDetail.entity';
import { ProductMainCategory } from 'src/apis/productsMainCategory/entities/productMainCategory.entity';
import { ProductOrder } from 'src/apis/productsOrder/entities/productOrder.entity';

import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  stock: number;

  @JoinColumn()
  @OneToOne(() => ProductMainCategory)
  productMainCategory: ProductMainCategory;

  @JoinColumn()
  @OneToOne(() => ProductDetail)
  productDetail: ProductDetail;

  @ManyToOne(() => ProductCart)
  productCart: ProductCart;

  @JoinTable()
  @ManyToMany(() => ProductOrder, (productOrder) => productOrder.products)
  productOrder: ProductOrder[];
}
