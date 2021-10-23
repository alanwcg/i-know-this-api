import { ISendMailDTO } from '../dtos/ISendMailDTO';
import { IMailProvider } from '../models/IMailProvider';

export class FakeMailProvider implements IMailProvider {
  private message: ISendMailDTO[] = [];

  async sendMail(data: ISendMailDTO): Promise<void> {
    this.message.push(data);
  }
}
