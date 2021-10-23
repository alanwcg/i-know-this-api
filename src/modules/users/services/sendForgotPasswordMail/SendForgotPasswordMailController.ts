import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { SendForgotPasswordMailService } from './SendForgotPasswordMailService';

export class SendForgotPasswordMailController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const service = container.resolve(SendForgotPasswordMailService);

    await service.execute(email);

    return response.status(204).send();
  }
}
