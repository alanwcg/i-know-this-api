import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindUserModuleService } from './FindUserModuleService';

export class FindUserModuleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const { module_id } = request.query;

    const service = container.resolve(FindUserModuleService);

    const result = await service.execute({
      user_id: id,
      module_id: module_id as string,
    });

    return response.json(result);
  }
}
