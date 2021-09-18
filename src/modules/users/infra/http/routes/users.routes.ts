import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import { CreateUserController } from '@modules/users/services/create/CreateUserController';

export const usersRouter = Router();

const createUserController = new CreateUserController();

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  createUserController.handle,
);
