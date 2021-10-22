import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateUserAvatarService } from './UpdateUserAvatarService';

export class UpdateUserAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const file = request.file.filename;

    const service = container.resolve(UpdateUserAvatarService);

    await service.execute({ user_id: id, file });

    return response.status(204).send();
  }
}
