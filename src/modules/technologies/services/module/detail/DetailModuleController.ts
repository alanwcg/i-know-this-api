import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DetailModuleService } from './DetailModuleService';

export class DetailModuleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const service = container.resolve(DetailModuleService);

    const result = await service.execute({ id });

    return response.status(200).json(classToClass(result));
  }
}
