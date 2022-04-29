import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
  constructor() {
    // super({
    //jwtFromRequest: (req) => {
    //console.log(req);
    // const refreshToken = req.headers.cookie.replace('refreshToken=', '');
    //console.log(refreshToken);
    //req.header.cookie에 있는 refreshToken 골라내기

    //     return refreshToken;
    //   },
    //   secretOrKey: 'myRefreshKey',
    //    });
    // }
    super({
      jwtFromRequest: (req) => req.headers.cookie.replace('refreshToken=', ''),
      secretOrKey: process.env.REFRESH_TOKEN_KEY,
    });
  }
  validate(payload) {
    console.log(payload);
    return {
      id: payload.sub,
      email: payload.email,
    };
  }
}
