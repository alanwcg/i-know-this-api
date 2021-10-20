import { BCryptHashProvider } from '@modules/users/providers/HashProvider/implementations/BCryptHashProvider';
import { IHashProvider } from '@modules/users/providers/HashProvider/models/IHashProvider';
import { FakeUsersRepository } from '@modules/users/repositories/fakes/FakeUsersRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppError';

import { CreateUserService } from '../create/CreateUserService';
import { UpdateUserService } from './UpdateUserService';

let fakeUsersRepository: IUsersRepository;
let bcryptHashProvider: IHashProvider;
let createUserService: CreateUserService;
let updateUserService: UpdateUserService;

describe('Update User Service', () => {
  beforeAll(() => {
    fakeUsersRepository = new FakeUsersRepository();
    bcryptHashProvider = new BCryptHashProvider();

    createUserService = new CreateUserService(
      fakeUsersRepository,
      bcryptHashProvider,
    );
    updateUserService = new UpdateUserService(fakeUsersRepository);
  });

  it('should be able to update user', async () => {
    const user = await createUserService.execute({
      name: 'Alan Cintra',
      email: 'alancintra7@gmail.com',
      password: '123456',
    });

    const result = await updateUserService.execute({
      user_id: user.id,
      name: 'Alan Cintra Gomes',
      email: 'alancintra@gmail.com',
    });

    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('name');
    expect(result).toHaveProperty('email');
    expect(result.name).toBe('Alan Cintra Gomes');
    expect(result.email).toBe('alancintra@gmail.com');
  });

  it('should not be able to update nonexistent user', async () => {
    await expect(
      updateUserService.execute({
        user_id: 'invalid id',
        name: 'Alan Cintra Gomes',
        email: 'alancintra@gmail.com',
      }),
    ).rejects.toEqual(new AppError('Usuário não encontrado!', 404));
  });
});
