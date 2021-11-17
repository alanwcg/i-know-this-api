import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindQuestionsService } from './FindQuestionsService';

export class FindQuestionsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { module_id } = request.query;

    const service = container.resolve(FindQuestionsService);

    const result = await service.execute({
      module_id: module_id as string,
    });

    return response.json(result);
  }
}
