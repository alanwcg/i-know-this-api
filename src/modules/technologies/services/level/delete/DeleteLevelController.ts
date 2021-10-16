import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteLevelService } from './DeleteLevelService';

export class DeleteLevelController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const service = container.resolve(DeleteLevelService);

    await service.execute({ id });

    return response.status(204).json();
  }
}
