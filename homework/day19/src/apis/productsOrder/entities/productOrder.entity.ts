import { Field, Int } from '@nestjs/graphql';
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
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  delivery: string;

  @Column()
  @Field(() => String)
  invoicenumber: string;

  @Column()
  @Field(() => String)
  address: string;

  @Column()
  @Field(() => String)
  deliverycompany: string;

  @JoinColumn()
  @Field(() => ProductCart)
  @OneToOne(() => ProductCart)
  productCart: ProductCart;

  @ManyToOne(() => User)
  @Field(() => User)
  user: User;

  // @ManyToMany(() => Product, (products) => products.productOrder)
  // products: Product[];
}
