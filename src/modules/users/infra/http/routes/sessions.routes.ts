import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import { AuthenticateUserController } from '@modules/users/services/authenticate/AuthenticateUserController';
import { RefreshTokenController } from '@modules/users/services/refreshToken/RefreshTokenController';

export const sessionsRouter = Router();

const authenticateUserController = new AuthenticateUserController();
const refreshTokenController = new RefreshTokenController();

sessionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  authenticateUserController.handle,
);

sessionsRouter.post(
  '/refresh-token',
  celebrate({
    [Segments.BODY]: {
      refresh_token: Joi.string().required(),
    },
  }),
  refreshTokenController.handle,
);
