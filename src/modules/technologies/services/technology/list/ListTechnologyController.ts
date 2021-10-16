import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListTechnologyService } from './ListTechnologyService';

export class ListTechnologyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(ListTechnologyService);

    const result = await service.execute();

    return response.status(200).json(classToClass(result));
  }
}
