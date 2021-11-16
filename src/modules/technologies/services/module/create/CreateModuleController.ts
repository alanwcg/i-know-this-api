import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateModuleService } from './CreateModuleService';

export class CreateModuleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, content, links, level_id, technology_id } =
      request.body;

    const service = container.resolve(CreateModuleService);

    const result = await service.execute({
      name,
      description,
      content,
      links,
      level_id,
      technology_id,
    });

    return response.status(201).json(classToClass(result));
  }
}
