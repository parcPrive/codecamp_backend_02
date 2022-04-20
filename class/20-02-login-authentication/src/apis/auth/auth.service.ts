import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  getAccessToken({ user }) {
    return this.jwtService.sign(
      { email: user.email, sub: user.id }, //sub는 독스에 있는것 하지만 다른걸로 바꿔써도 된다 ex)id
      { secret: 'myAccessKey', expiresIn: '1h' },
    );
  }
}
