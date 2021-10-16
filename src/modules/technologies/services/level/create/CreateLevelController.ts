import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateLevelService } from './CreateLevelService';

export class CreateLevelController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const service = container.resolve(CreateLevelService);

    const result = await service.execute({
      name,
      description,
    });

    return response.status(201).json(classToClass(result));
  }
}
