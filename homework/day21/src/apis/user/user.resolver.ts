import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { UseGuards } from '@nestjs/common';
import { GqlAuthAccessGuard } from 'src/commons/auth/gql-auth.guard';
import { CurrentUser } from 'src/commons/auth/gql-user.param';

@Resolver()
export class UserResolver {
  constructor(
    private readonly userService: UserService, //
  ) {}

  @Mutation(() => User)
  async createUser(
    @Args('email') email: string,
    @Args('pw') pw: string,
    @Args('phone') phone: string,
    @Args('address') address: string,
    @Args('person') person: string,
  ) {
    const hashedPassword = await bcrypt.hash(pw, 10);
    return this.userService.create({
      email,
      hashedPassword,
      address,
      phone,
      person,
    });
  }

  @UseGuards(GqlAuthAccessGuard)
  @Query(() => User)
  checkUser(@CurrentUser() currentUser: any) {
    const email = currentUser.email;
    return this.userService.findOne({ email });
  }

  @UseGuards(GqlAuthAccessGuard)
  @Query(() => String)
  fetchUser(
    @CurrentUser() currentUser: any, //
  ) {
    console.log('currentUser는?', currentUser);
    console.log('fetchUser 실행완료');
    return currentUser.email;
  }

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => String)
  async updateUser(
    @CurrentUser() currentUser: any, //
    @Args('pw') pw: string,
  ) {
    const hashedPassword = await bcrypt.hash(pw, 10);
    this.userService.update({
      email: currentUser.email,
      pw: hashedPassword,
    });
    return '끝';
  }

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => Boolean)
  deleteUser(@CurrentUser() currentUser: any) {
    return this.userService.delete({ email: currentUser.email });
  }
}
