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

import { CreateUserService } from '../create/CreateUserService';
import { AuthenticateUserService } from './AuthenticateUserService';

let fakeUsersRepository: IUsersRepository;
let bcryptHashProvider: IHashProvider;
let fakeUsersTokensRepository: IUsersTokensRepository;
let dateFNSProvider: IDateProvider;
let createUserService: CreateUserService;
let authenticateUserService: AuthenticateUserService;

describe('Authenticate User Service', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    bcryptHashProvider = new BCryptHashProvider();
    fakeUsersTokensRepository = new FakeUsersTokensRepository();
    dateFNSProvider = new DateFNSProvider();

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
  });

  it('should be able to authenticate an user', async () => {
    const user: ICreateUserDTO = {
      name: 'User',
      email: 'user@test.com',
      password: '123456',
    };

    await createUserService.execute(user);

    const result = await authenticateUserService.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty('user');
    expect(result).toHaveProperty('token');
    expect(result).toHaveProperty('refresh_token');
  });

  it('should not be able to authenticate a nonexistent user', async () => {
    await expect(
      authenticateUserService.execute({
        email: 'user@test.com',
        password: '123456',
      }),
    ).rejects.toEqual(new AppError('E-mail ou senha incorretos!', 401));
  });

  it('should not be able to authenticate with incorret password', async () => {
    const user: ICreateUserDTO = {
      name: 'User',
      email: 'user@test.com',
      password: '123456',
    };

    await createUserService.execute(user);

    await expect(
      authenticateUserService.execute({
        email: user.email,
        password: 'incorrect password',
      }),
    ).rejects.toEqual(new AppError('E-mail ou senha incorretos!', 401));
  });
});
