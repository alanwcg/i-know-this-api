import { FakeUsersRepository } from '@modules/users/repositories/fakes/FakeUsersRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { FakeStorageProvider } from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';
import { IStorageProvider } from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import { AppError } from '@shared/errors/AppError';

import { UpdateUserAvatarService } from './UpdateUserAvatarService';

let fakeUsersRepository: IUsersRepository;
let fakeStorageProvider: IStorageProvider;
let updateUserAvatarService: UpdateUserAvatarService;

describe('Update User Avatar Service', () => {
  beforeAll(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeStorageProvider = new FakeStorageProvider();

    updateUserAvatarService = new UpdateUserAvatarService(
      fakeUsersRepository,
      fakeStorageProvider,
    );
  });

  it('should be able to update user avatar', async () => {
    const saveFile = jest.spyOn(fakeStorageProvider, 'save');
    const updateUser = jest.spyOn(fakeUsersRepository, 'update');

    const user = await fakeUsersRepository.create({
      name: 'Alan Cintra',
      email: 'alancintra7@gmail.com',
      password: '123456',
    });

    await updateUserAvatarService.execute({
      user_id: user.id,
      file: 'avatar',
    });

    expect(saveFile).toHaveBeenCalled();
    expect(updateUser).toHaveBeenCalled();
  });

  it('should be able to change old avatar to a new one', async () => {
    const deleteFile = jest.spyOn(fakeStorageProvider, 'delete');
    const saveFile = jest.spyOn(fakeStorageProvider, 'save');
    const updateUser = jest.spyOn(fakeUsersRepository, 'update');

    const user = await fakeUsersRepository.create({
      name: 'Alan Cintra',
      email: 'alancintra7@gmail.com',
      password: '123456',
    });

    await updateUserAvatarService.execute({
      user_id: user.id,
      file: 'avatar',
    });

    await updateUserAvatarService.execute({
      user_id: user.id,
      file: 'new avatar',
    });

    expect(deleteFile).toHaveBeenCalled();
    expect(saveFile).toHaveBeenCalled();
    expect(updateUser).toHaveBeenCalled();
  });

  it('should not be able to update avatar of nonexistent user', async () => {
    await expect(
      updateUserAvatarService.execute({
        user_id: 'nonexistent user_id',
        file: 'avatar',
      }),
    ).rejects.toEqual(new AppError('Usuário não encontrado!', 404));
  });
});
