import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListModuleService } from './ListModuleService';

export class ListModuleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(ListModuleService);

    const result = await service.execute();

    return response.status(200).json(classToClass(result));
  }
}
