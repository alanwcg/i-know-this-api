import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import { CreateUserController } from '@modules/users/services/create/CreateUserController';
import { FindUserByIdController } from '@modules/users/services/findById/FindUserByIdController';
import { UpdateUserController } from '@modules/users/services/update/UpdateUserController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

export const usersRouter = Router();

const createUserController = new CreateUserController();
const findUserByIdController = new FindUserByIdController();
const updateUserController = new UpdateUserController();

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

usersRouter.get('/me', ensureAuthenticated, findUserByIdController.handle);

usersRouter.put(
  '/:id',
  ensureAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().required(),
    },
  }),
  updateUserController.handle,
);
