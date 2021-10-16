import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteModuleService } from './DeleteModuleService';

export class DeleteModuleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const service = container.resolve(DeleteModuleService);

    await service.execute({ id });

    return response.status(204).json();
  }
}
