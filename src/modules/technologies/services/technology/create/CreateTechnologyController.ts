import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateTechnologyService } from './CreateTechnologyService';

export class CreateTechnologyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const service = container.resolve(CreateTechnologyService);

    const result = await service.execute({
      name,
      description,
    });

    return response.status(201).json(classToClass(result));
  }
}
