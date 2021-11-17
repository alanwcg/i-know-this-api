import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserModuleService } from './CreateUserModuleService';

export class CreateUserModuleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const { level_id, module_id, progression } = request.body;

    const service = container.resolve(CreateUserModuleService);

    const result = await service.execute({
      user_id: id,
      level_id,
      module_id,
      progression,
    });

    return response.json(result);
  }
}
