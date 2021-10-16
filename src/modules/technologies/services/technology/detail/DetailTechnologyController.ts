import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DetailTechnologyService } from './DetailTechnologyService';

export class DetailTechnologyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const service = container.resolve(DetailTechnologyService);

    const result = await service.execute({ id });

    return response.status(200).json(classToClass(result));
  }
}
