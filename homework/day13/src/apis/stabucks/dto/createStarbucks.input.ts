import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateStarbucksInput {
  @Field(() => String)
  menu: string;

  @Field(() => String)
  price: string;

  @Field(() => String)
  kcal: string;

  @Field(() => String)
  fat: string;

  @Field(() => String)
  protein: string;

  @Field(() => String)
  sodium: string;

  @Field(() => String)
  sugar: string;

  @Field(() => String)
  caffeine: string;
}
