import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateModuleReferenceService } from './CreateModuleReferenceService';

export class CreateModuleReferenceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, url, module_id } = request.body;

    const service = container.resolve(CreateModuleReferenceService);

    const result = await service.execute({
      title,
      url,
      module_id,
    });

    return response.status(201).json(classToClass(result));
  }
}
