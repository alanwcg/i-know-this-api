import { sign, verify } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import auth from '@config/auth';
import { IUsersTokensRepository } from '@modules/users/repositories/IUsersTokensRepository';
import { IDateProvider } from '@shared/container/providers/DateProvider/models/IDateProvider';
import { AppError } from '@shared/errors/AppError';

interface IPayload {
  sub: string;
}

interface IResponse {
  token: string;
  refresh_token: string;
}

@injectable()
export class RefreshTokenService {
  constructor(
    @inject('UsersTokensRepository')
    private usersTokensRepository: IUsersTokensRepository,

    @inject('DateProvider')
    private dateProvider: IDateProvider,
  ) {}

  async execute(refresh_token: string): Promise<IResponse> {
    const {
      token_secret,
      token_expiration,
      refresh_token_secret,
      refresh_token_expiration,
      refresh_token_expiration_days,
    } = auth;

    try {
      const { sub } = verify(refresh_token, refresh_token_secret) as IPayload;

      const user_id = sub;

      const userToken =
        await this.usersTokensRepository.findByUserIdAndRefreshToken(
          user_id,
          refresh_token,
        );

      await this.usersTokensRepository.delete(userToken.id);

      const newToken = sign({}, token_secret, {
        subject: user_id,
        expiresIn: token_expiration,
      });

      const newRefreshToken = sign({}, refresh_token_secret, {
        subject: user_id,
        expiresIn: refresh_token_expiration,
      });

      const expiration_date = this.dateProvider.addDays(
        new Date(),
        refresh_token_expiration_days,
      );

      await this.usersTokensRepository.create({
        user_id,
        refresh_token: newRefreshToken,
        expiration_date,
      });

      return {
        token: newToken,
        refresh_token: newRefreshToken,
      };
    } catch (error) {
      throw new AppError('Refresh Token inválido', 401);
    }
  }
}
