import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListModuleByTechnologyIdService } from './ListModuleByTechnologyIdService';

export class ListModuleByTechnologyIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const service = container.resolve(ListModuleByTechnologyIdService);

    const result = await service.execute(id);

    return response.status(200).json(classToClass(result));
  }
}
