import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteTechnologyService } from './DeleteTechnologyService';

export class DeleteTechnologyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const service = container.resolve(DeleteTechnologyService);

    await service.execute({ id });

    return response.status(204).json();
  }
}
