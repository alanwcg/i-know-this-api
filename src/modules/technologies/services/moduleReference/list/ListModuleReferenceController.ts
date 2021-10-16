import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListModuleReferenceService } from './ListModuleReferenceService';

export class ListModuleReferenceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(ListModuleReferenceService);

    const result = await service.execute();

    return response.status(200).json(classToClass(result));
  }
}
