import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { RefreshTokenService } from './RefreshTokenService';

export class RefreshTokenController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { refresh_token } = request.body;

    const service = container.resolve(RefreshTokenService);

    const result = await service.execute(refresh_token);

    return response.json(result);
  }
}
