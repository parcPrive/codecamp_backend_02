import { InputType, OmitType } from '@nestjs/graphql';
import { ProductMainCategory } from '../entities/productMainCategory.entity';

@InputType()
export class ProductMainCategoryInput extends OmitType(
  ProductMainCategory,
  ['id'],
  InputType,
) {}
