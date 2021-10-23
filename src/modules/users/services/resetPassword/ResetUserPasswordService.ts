import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { IUsersTokensRepository } from '@modules/users/repositories/IUsersTokensRepository';
import { IDateProvider } from '@shared/container/providers/DateProvider/models/IDateProvider';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  refresh_token: string;
  password: string;
}

@injectable()
export class ResetUserPasswordService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('UsersTokensRepository')
    private usersTokensRepository: IUsersTokensRepository,

    @inject('DateProvider')
    private dateProvider: IDateProvider,
  ) {}

  async execute({ refresh_token, password }: IRequest): Promise<void> {
    const userToken = await this.usersTokensRepository.findByRefreshToken(
      refresh_token,
    );

    if (!userToken) {
      throw new AppError('Token não encontrado!', 404);
    }

    if (
      this.dateProvider.compareIfBefore(userToken.expiration_date, new Date())
    ) {
      throw new AppError('Token expirado!');
    }

    const user = await this.usersRepository.findById(userToken.user_id);

    user.password = await hash(password, 10);

    await this.usersRepository.update(user);

    await this.usersTokensRepository.delete(userToken.id);
  }
}
