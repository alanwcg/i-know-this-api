import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateTechnologyService } from './UpdateTechnologyService';

export class UpdateTechnologyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description } = request.body;

    const service = container.resolve(UpdateTechnologyService);

    const result = await service.execute({ id, name, description });

    return response.status(200).json(classToClass(result));
  }
}
