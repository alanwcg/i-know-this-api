import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListModuleService } from './ListModuleService';

export class ListModuleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { technology_id } = request.query;

    const service = container.resolve(ListModuleService);

    const result = await service.execute({
      technology_id: technology_id as string,
    });

    return response.status(200).json(classToClass(result));
  }
}
