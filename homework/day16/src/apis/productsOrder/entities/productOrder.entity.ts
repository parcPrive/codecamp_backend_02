import { Product } from 'src/apis/products/entities/product.entity';
import { ProductCart } from 'src/apis/productsCart/entities/productCart.entity';
import { User } from 'src/apis/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ProductOrder {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  delivery: string;

  @Column()
  invoicenumber: number;

  @Column()
  address: string;

  @Column()
  deliverycompany: string;

  @JoinColumn()
  @OneToOne(() => ProductCart)
  productCart: ProductCart;

  @ManyToOne(() => User)
  user: User;

  @ManyToMany(() => Product, (products) => products.productOrder)
  products: Product[];
}
