import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ProductCart } from 'src/apis/productsCart/entities/productCart.entity';
import { ProductDetail } from 'src/apis/productsDetail/entities/productDetail.entity';
import { ProductMainCategory } from 'src/apis/productsMainCategory/entities/productMainCategory.entity';
import { ProductOrder } from 'src/apis/productsOrder/entities/productOrder.entity';

import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  description: string;

  @Column()
  @Field(() => Int)
  price: number;

  @Column({ default: false })
  @Field(() => Boolean)
  isSoldout: boolean;

  @DeleteDateColumn()
  deleteAt: Date;

  @JoinColumn()
  @OneToOne(() => ProductMainCategory)
  @Field(() => ProductMainCategory)
  productMainCategory: ProductMainCategory;

  @JoinColumn()
  @OneToOne(() => ProductDetail)
  @Field(() => ProductDetail)
  productDetail: ProductDetail;

  @ManyToOne(() => ProductCart)
  @Field(() => ProductCart)
  productCart: ProductCart;

  // @JoinTable()
  // @ManyToMany(() => ProductOrder, (productOrder) => productOrder.products)
  // productOrder: ProductOrder[];
}
