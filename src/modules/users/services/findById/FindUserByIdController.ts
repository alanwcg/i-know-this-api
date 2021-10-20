import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindUserByIdService } from './FindUserByIdService';

export class FindUserByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const service = container.resolve(FindUserByIdService);

    const result = await service.execute(id);

    return response.json(result);
  }
}
