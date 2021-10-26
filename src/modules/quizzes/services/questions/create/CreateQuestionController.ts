import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateQuestionService } from './CreateQuestionService';

export class CreateQuestionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { text, module_id } = request.body;

    const service = container.resolve(CreateQuestionService);

    const result = await service.execute({ text, module_id });

    return response.status(201).json(classToClass(result));
  }
}
