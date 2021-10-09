import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AuthenticateUserService } from './AuthenticateUserService';

export class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const service = container.resolve(AuthenticateUserService);

    const result = await service.execute({
      email,
      password,
    });

    return response.json(result);
  }
}
