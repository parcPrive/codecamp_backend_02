import { UnprocessableEntityException } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}
  @Mutation(() => String)
  async login(
    @Args('email') email: string, //
    @Args('pw') pw: string,
  ) {
    //1.로그인(이메일과 비밀번호 일치 유저)
    const user = await this.userService.findOne({ email });
    //2. 일치하는 유저 없으면!
    if (!user) throw new UnprocessableEntityException('이메일이 없습니다.');
    //3. 일치하는 유저는 있지만 비번이 틀리면?
    const isAuth = await bcrypt.compare(pw, user.pw);
    if (!isAuth) throw new UnprocessableEntityException('암호가 틀렸습니다.');
    //4. 모두 다 일치한다면?
    return this.authService.getAccessToken({ user });
  }
}
