import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListLevelService } from './ListLevelService';

export class ListLevelController {
  async handle(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(ListLevelService);

    const result = await service.execute();

    return response.status(200).json(classToClass(result));
  }
}
