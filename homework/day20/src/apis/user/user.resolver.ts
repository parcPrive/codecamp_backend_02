import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(
    private readonly userService: UserService, //
  ) {}

  @Mutation(() => User)
  createUser(
    @Args('email') email: string,
    @Args('pw') pw: string,
    @Args('phone') phone: string,
    @Args('address') address: string,
    @Args('person') person: string,
  ) {
    return this.userService.create({ email, pw, address, phone, person });
  }
}
