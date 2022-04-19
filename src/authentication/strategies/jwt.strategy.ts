import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JwtConfigService } from 'src/config/jwt/config.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly jwtConfigService: JwtConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConfigService.secret,
    });
  }

  async validate(payload: any) {
    //TODO: Database lookup for more info
    return { userId: payload.sub, username: payload.username };
  }
}
