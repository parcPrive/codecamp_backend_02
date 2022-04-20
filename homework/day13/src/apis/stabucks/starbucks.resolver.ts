import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StarbucksService } from './starbucks.service';
//import { CreateStarbucksInput } from './dto/createStarbucks.input';
import { Starbucks } from './entities/starbucks.entity';
//import { ConsoleLogger } from '@nestjs/common';

@Resolver()
export class StarbucksResolver {
  constructor(private readonly starbucksService: StarbucksService) {}

  @Query(() => [Starbucks])
  fetchStarbucks() {
    return this.starbucksService.findAll();
  }

  @Mutation(() => String)
  createStarbucks(
    @Args('menu') menu: string,
    @Args('price') price: string,
    @Args('kcal') kcal: string,
    @Args('fat') fat: string,
    @Args('protein') protein: string,
    @Args('sodium') sodium: string,
    @Args('sugar') sugar: string,
    @Args('caffeine') caffeine: string,
  ) {
    console.log(menu);
    console.log(price);
    console.log(kcal);
    console.log(fat);
    console.log(protein);
    console.log(sodium);
    console.log(sugar);
    console.log(caffeine);
    return this.starbucksService.create();
  }
}
