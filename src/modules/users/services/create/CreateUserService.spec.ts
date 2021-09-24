import { BCryptHashProvider } from '@modules/users/providers/implementations/BCryptHashProvider';
import { FakeUsersRepository } from '@modules/users/repositories/fakes/FakeUsersRepository';
import { AppError } from '@shared/errors/AppError';

import { CreateUserService } from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let bcryptHashProvider: BCryptHashProvider;
let createUserService: CreateUserService;

describe('Create User Service', () => {
  beforeAll(() => {
    fakeUsersRepository = new FakeUsersRepository();
    bcryptHashProvider = new BCryptHashProvider();
    createUserService = new CreateUserService(
      fakeUsersRepository,
      bcryptHashProvider,
    );
  });

  it('should be able to create a new user', async () => {
    const user = await createUserService.execute({
      name: 'Alan Cintra',
      email: 'alancintra7@gmail.com',
      password: '123456',
    });

    const validateUserPassword = await bcryptHashProvider.compareHash(
      '123456',
      user.password,
    );

    expect(user).toHaveProperty('id');
    expect(user.name).toBe('Alan Cintra');
    expect(user.email).toBe('alancintra7@gmail.com');
    expect(validateUserPassword).toBeTruthy();
  });

  it('should not be able to create a new user with already taken email', async () => {
    await createUserService.execute({
      name: 'Alan Cintra',
      email: 'alancintra@gmail.com',
      password: '123456',
    });

    await expect(
      createUserService.execute({
        name: 'Alan Cintra',
        email: 'alancintra@gmail.com',
        password: '123456',
      }),
    ).rejects.toEqual(new AppError('Usuário já existe!'));
  });
});
