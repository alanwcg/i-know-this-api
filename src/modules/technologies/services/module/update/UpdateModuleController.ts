import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateModuleService } from './UpdateModuleService';

export class UpdateModuleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description, content, links, level_id, technology_id } =
      request.body;

    const service = container.resolve(UpdateModuleService);

    const result = await service.execute({
      id,
      name,
      description,
      content,
      links,
      level_id,
      technology_id,
    });

    return response.status(200).json(classToClass(result));
  }
}
