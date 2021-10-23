import { FakeUsersRepository } from '@modules/users/repositories/fakes/FakeUsersRepository';
import { FakeUsersTokensRepository } from '@modules/users/repositories/fakes/FakeUsersTokensRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { IUsersTokensRepository } from '@modules/users/repositories/IUsersTokensRepository';
import { DateFNSProvider } from '@shared/container/providers/DateProvider/implementations/DateFNSProvider';
import { IDateProvider } from '@shared/container/providers/DateProvider/models/IDateProvider';
import { FakeMailProvider } from '@shared/container/providers/MailProvider/fakes/FakeMailProvider';
import { IMailProvider } from '@shared/container/providers/MailProvider/models/IMailProvider';
import { AppError } from '@shared/errors/AppError';

import { SendForgotPasswordMailService } from './SendForgotPasswordMailService';

let fakeUsersRepository: IUsersRepository;
let fakeUsersTokensRepository: IUsersTokensRepository;
let dateProvider: IDateProvider;
let fakeMailProvider: IMailProvider;
let sendForgotPasswordMailService: SendForgotPasswordMailService;

describe('Send Forgot Password Mail Service', () => {
  beforeAll(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeUsersTokensRepository = new FakeUsersTokensRepository();
    dateProvider = new DateFNSProvider();
    fakeMailProvider = new FakeMailProvider();

    sendForgotPasswordMailService = new SendForgotPasswordMailService(
      fakeUsersRepository,
      fakeUsersTokensRepository,
      dateProvider,
      fakeMailProvider,
    );
  });

  it('should be able to send a forgot password mail to user', async () => {
    const generateTokenMail = jest.spyOn(fakeUsersTokensRepository, 'create');
    const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');

    await fakeUsersRepository.create({
      name: 'Alan Cintra',
      email: 'alancintra7@gmail.com',
      password: '123456',
    });

    await sendForgotPasswordMailService.execute('alancintra7@gmail.com');

    expect(generateTokenMail).toHaveBeenCalled();
    expect(sendMail).toHaveBeenCalled();
  });

  it('should not be able to send mail to a nonexistent user', async () => {
    await expect(
      sendForgotPasswordMailService.execute('nonexistent user mail'),
    ).rejects.toEqual(new AppError('Usuário não encontrado!', 404));
  });
});
