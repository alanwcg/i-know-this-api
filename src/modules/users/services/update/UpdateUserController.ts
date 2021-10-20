import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateUserService } from './UpdateUserService';

export class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, email } = request.body;

    const service = container.resolve(UpdateUserService);

    const result = await service.execute({
      user_id: id,
      name,
      email,
    });

    return response.json(result);
  }
}
