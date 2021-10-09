import { classToClass } from 'class-transformer';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import auth from '@config/auth';
import { User } from '@modules/users/infra/typeorm/entities/User';
import { IHashProvider } from '@modules/users/providers/HashProvider/models/IHashProvider';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { IUsersTokensRepository } from '@modules/users/repositories/IUsersTokensRepository';
import { IDateProvider } from '@shared/container/providers/DateProvider/models/IDateProvider';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
  refresh_token: string;
}

@injectable()
export class AuthenticateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,

    @inject('UsersTokensRepository')
    private usersTokensRepository: IUsersTokensRepository,

    @inject('DateProvider')
    private dateProvider: IDateProvider,
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('E-mail ou senha incorretos!', 401);
    }

    const passwordMatched = await this.hashProvider.compareHash(
      password,
      user.password,
    );

    if (!passwordMatched) {
      throw new AppError('E-mail ou senha incorretos!', 401);
    }

    const {
      token_secret,
      token_expiration,
      refresh_token_secret,
      refresh_token_expiration,
      refresh_token_expiration_days,
    } = auth;

    const token = sign({}, token_secret, {
      subject: user.id,
      expiresIn: token_expiration,
    });

    const refresh_token = sign({}, refresh_token_secret, {
      subject: user.id,
      expiresIn: refresh_token_expiration,
    });

    const expiration_date = this.dateProvider.addDays(
      new Date(),
      refresh_token_expiration_days,
    );

    await this.usersTokensRepository.create({
      user_id: user.id,
      refresh_token,
      expiration_date,
    });

    return {
      user: classToClass(user),
      token,
      refresh_token,
    };
  }
}
