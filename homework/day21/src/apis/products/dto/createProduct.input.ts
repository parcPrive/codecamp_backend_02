import { Field, InputType, Int } from '@nestjs/graphql';
import { ProductCart } from 'src/apis/productsCart/entities/productCart.entity';
import { ProductDetailInput } from 'src/apis/productsDetail/dto/productDetail.input';
import { ProductMainCategoryInput } from 'src/apis/productsMainCategory/dto/productMainCategory.input';

@InputType()
export class CreateProductInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => Int)
  price: number;

  @Field(() => ProductMainCategoryInput)
  productMainCategory: ProductMainCategoryInput;

  @Field(() => ProductDetailInput)
  productDetail: ProductDetailInput;

  @Field(() => String)
  productCartId: string;

  @Field(() => [String])
  productOrder: string[];
}
