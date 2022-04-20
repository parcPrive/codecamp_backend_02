import { InputType, PartialType } from '@nestjs/graphql';
import { CreateProductInput } from './createProduct.input';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {}
//PartialType을 사용해서 저안에 내용을 느낌표를 없앨수있다.
