import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteModuleReferenceService } from './DeleteModuleReferenceService';

export class DeleteModuleReferenceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const service = container.resolve(DeleteModuleReferenceService);

    await service.execute({ id });

    return response.status(204).json();
  }
}
