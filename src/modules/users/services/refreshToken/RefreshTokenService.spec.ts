import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';
import { BCryptHashProvider } from '@modules/users/providers/HashProvider/implementations/BCryptHashProvider';
import { IHashProvider } from '@modules/users/providers/HashProvider/models/IHashProvider';
import { FakeUsersRepository } from '@modules/users/repositories/fakes/FakeUsersRepository';
import { FakeUsersTokensRepository } from '@modules/users/repositories/fakes/FakeUsersTokensRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { IUsersTokensRepository } from '@modules/users/repositories/IUsersTokensRepository';
import { DateFNSProvider } from '@shared/container/providers/DateProvider/implementations/DateFNSProvider';
import { IDateProvider } from '@shared/container/providers/DateProvider/models/IDateProvider';
import { AppError } from '@shared/errors/AppError';

import { AuthenticateUserService } from '../authenticate/AuthenticateUserService';
import { CreateUserService } from '../create/CreateUserService';
import { RefreshTokenService } from './RefreshTokenService';

let fakeUsersRepository: IUsersRepository;
let fakeUsersTokensRepository: IUsersTokensRepository;
let dateFNSProvider: IDateProvider;
let bcryptHashProvider: IHashProvider;
let createUserService: CreateUserService;
let authenticateUserService: AuthenticateUserService;
let refreshTokenService: RefreshTokenService;

describe('Refresh Token Service', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeUsersTokensRepository = new FakeUsersTokensRepository();
    dateFNSProvider = new DateFNSProvider();
    bcryptHashProvider = new BCryptHashProvider();

    createUserService = new CreateUserService(
      fakeUsersRepository,
      bcryptHashProvider,
    );
    authenticateUserService = new AuthenticateUserService(
      fakeUsersRepository,
      bcryptHashProvider,
      fakeUsersTokensRepository,
      dateFNSProvider,
    );
    refreshTokenService = new RefreshTokenService(
      fakeUsersTokensRepository,
      dateFNSProvider,
    );
  });

  it('should be able to refresh user token', async () => {
    const user: ICreateUserDTO = {
      name: 'User',
      email: 'user@test.com',
      password: '123456',
    };

    await createUserService.execute(user);

    const session = await authenticateUserService.execute({
      email: user.email,
      password: user.password,
    });

    const result = await refreshTokenService.execute(session.refresh_token);

    expect(result).toHaveProperty('token');
    expect(result).toHaveProperty('refresh_token');
  });

  it('should not be able to refresh invalid user token', async () => {
    await expect(
      refreshTokenService.execute('invalid refresh_token'),
    ).rejects.toEqual(new AppError('Refresh Token não encontrado!'));
  });

  // it('should not be able to refresh expired user token', async () => {
  // TODO:Test expired refresh token
  // });
});
