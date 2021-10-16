import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateModuleReferenceService } from './UpdateModuleReferenceService';

export class UpdateModuleReferenceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { title, url, module_id } = request.body;

    const service = container.resolve(UpdateModuleReferenceService);

    const result = await service.execute({
      id,
      title,
      url,
      module_id,
    });

    return response.status(200).json(classToClass(result));
  }
}
