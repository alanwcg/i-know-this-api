import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import multer from 'multer';

import upload from '@config/upload';
import { CreateUserController } from '@modules/users/services/create/CreateUserController';
import { FindUserByIdController } from '@modules/users/services/findById/FindUserByIdController';
import { UpdateUserController } from '@modules/users/services/update/UpdateUserController';
import { UpdateUserAvatarController } from '@modules/users/services/updateUserAvatar/UpdateUserAvatarController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

export const usersRouter = Router();

const multerUpload = multer(upload);

const createUserController = new CreateUserController();
const findUserByIdController = new FindUserByIdController();
const updateUserController = new UpdateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

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

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  multerUpload.single('avatar'),
  updateUserAvatarController.handle,
);
