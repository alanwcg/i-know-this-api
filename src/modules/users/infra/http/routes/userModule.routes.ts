import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import { CreateUserModuleController } from '@modules/users/services/createUserModule/CreateUserModuleController';
import { FindUserModuleController } from '@modules/users/services/findUserModule/FindUserModuleController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

export const userModuleRouter = Router();

userModuleRouter.use(ensureAuthenticated);

const createUserModuleController = new CreateUserModuleController();
const findUserModuleController = new FindUserModuleController();

userModuleRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      user_id: Joi.string().uuid().required(),
      level_id: Joi.string().uuid().required(),
      module_id: Joi.string().uuid().required(),
      progression: Joi.number().required(),
    },
  }),
  createUserModuleController.handle,
);

userModuleRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: {
      module_id: Joi.string().uuid().allow(''),
    },
  }),
  findUserModuleController.handle,
);

userModuleRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
);

userModuleRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      user_id: Joi.string().uuid(),
      level_id: Joi.string().uuid(),
      technology_id: Joi.string().uuid(),
      progression: Joi.number(),
    },
  }),
);

userModuleRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
);
