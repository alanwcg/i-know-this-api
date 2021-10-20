import { BCryptHashProvider } from '@modules/users/providers/HashProvider/implementations/BCryptHashProvider';
import { IHashProvider } from '@modules/users/providers/HashProvider/models/IHashProvider';
import { FakeUsersRepository } from '@modules/users/repositories/fakes/FakeUsersRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppError';

import { CreateUserService } from '../create/CreateUserService';
import { FindUserByIdService } from './FindUserByIdService';

let fakeUsersRepository: IUsersRepository;
let bcryptHashProvider: IHashProvider;
let createUserService: CreateUserService;
let findUserByIdService: FindUserByIdService;

describe('Find User By Id Service', () => {
  beforeAll(() => {
    fakeUsersRepository = new FakeUsersRepository();
    bcryptHashProvider = new BCryptHashProvider();

    createUserService = new CreateUserService(
      fakeUsersRepository,
      bcryptHashProvider,
    );
    findUserByIdService = new FindUserByIdService(fakeUsersRepository);
  });

  it('should be able to get logged user data', async () => {
    const user = await createUserService.execute({
      name: 'Alan Cintra',
      email: 'alancintra7@gmail.com',
      password: '123456',
    });

    const result = await findUserByIdService.execute(user.id);

    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('name');
    expect(result).toHaveProperty('email');
    expect(result.name).toBe('Alan Cintra');
    expect(user.email).toBe('alancintra7@gmail.com');
  });

  it('should not be able to get nonexistent or unauthorized user data', async () => {
    await expect(
      findUserByIdService.execute('nonexistent user id'),
    ).rejects.toEqual(new AppError('Usuário não encontrado!', 404));
  });
});
