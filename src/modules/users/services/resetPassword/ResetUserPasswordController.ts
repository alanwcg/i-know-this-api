import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ResetUserPasswordService } from './ResetUserPasswordService';

export class ResetUserPasswordController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { token } = request.query;
    const { password } = request.body;

    const service = container.resolve(ResetUserPasswordService);

    await service.execute({
      refresh_token: String(token),
      password,
    });

    return response.status(204).send();
  }
}
