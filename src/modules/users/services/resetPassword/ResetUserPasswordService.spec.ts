import { v4 as uuid } from 'uuid';

import { BCryptHashProvider } from '@modules/users/providers/HashProvider/implementations/BCryptHashProvider';
import { IHashProvider } from '@modules/users/providers/HashProvider/models/IHashProvider';
import { FakeUsersRepository } from '@modules/users/repositories/fakes/FakeUsersRepository';
import { FakeUsersTokensRepository } from '@modules/users/repositories/fakes/FakeUsersTokensRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { IUsersTokensRepository } from '@modules/users/repositories/IUsersTokensRepository';
import { DateFNSProvider } from '@shared/container/providers/DateProvider/implementations/DateFNSProvider';
import { IDateProvider } from '@shared/container/providers/DateProvider/models/IDateProvider';
import { AppError } from '@shared/errors/AppError';

import { ResetUserPasswordService } from './ResetUserPasswordService';

let token: string;
let fakeUsersRepository: IUsersRepository;
let fakeUsersTokensRepository: IUsersTokensRepository;
let dateProvider: IDateProvider;
let hashProvider: IHashProvider;
let resetUserPasswordService: ResetUserPasswordService;

describe('Reset User Password Service', () => {
  beforeAll(() => {
    token = uuid();

    fakeUsersRepository = new FakeUsersRepository();
    fakeUsersTokensRepository = new FakeUsersTokensRepository();
    dateProvider = new DateFNSProvider();
    hashProvider = new BCryptHashProvider();

    resetUserPasswordService = new ResetUserPasswordService(
      fakeUsersRepository,
      fakeUsersTokensRepository,
      dateProvider,
    );
  });

  it('should be able to reset user password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Alan Cintra',
      email: 'alancintra7@gmail.com',
      password: 'senha',
    });

    const userToken = await fakeUsersTokensRepository.create({
      user_id: user.id,
      refresh_token: token,
      expiration_date: dateProvider.addHours(new Date(), 3),
    });

    await resetUserPasswordService.execute({
      refresh_token: userToken.refresh_token,
      password: '123456',
    });

    const validateUserPassword = await hashProvider.compareHash(
      '123456',
      user.password,
    );

    expect(validateUserPassword).toBeTruthy();
  });

  it('should not be able to reset user password with invalid token', async () => {
    await expect(
      resetUserPasswordService.execute({
        refresh_token: 'invalid token',
        password: '123456',
      }),
    ).rejects.toEqual(new AppError('Token não encontrado!', 404));
  });

  it('should not be able to reset user password with expired token', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Alan Cintra',
      email: 'alancintra7@gmail.com',
      password: 'senha',
    });

    const userToken = await fakeUsersTokensRepository.create({
      user_id: user.id,
      refresh_token: token,
      expiration_date: new Date(),
    });

    await new Promise(resolve => setTimeout(() => resolve(undefined), 500));

    await expect(
      resetUserPasswordService.execute({
        refresh_token: userToken.refresh_token,
        password: '123456',
      }),
    ).rejects.toEqual(new AppError('Token expirado!'));
  });
});
