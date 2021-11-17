import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import { CreateModuleController } from '@modules/technologies/services/module/create/CreateModuleController';
import { DeleteModuleController } from '@modules/technologies/services/module/delete/DeleteModuleController';
import { DetailModuleController } from '@modules/technologies/services/module/detail/DetailModuleController';
import { ListModuleByTechnologyIdController } from '@modules/technologies/services/module/list/ListModuleByTechnologyIdController';
import { ListModuleController } from '@modules/technologies/services/module/list/ListModuleController';
import { UpdateModuleController } from '@modules/technologies/services/module/update/UpdateModuleController';

export const moduleRouter = Router();

const createModuleController = new CreateModuleController();
const listModuleController = new ListModuleController();
const detailModuleController = new DetailModuleController();
const updateModuleController = new UpdateModuleController();
const deleteModuleController = new DeleteModuleController();
const listModuleByTechnologyIdController =
  new ListModuleByTechnologyIdController();

moduleRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string(),
      content: Joi.string(),
      level_id: Joi.string().uuid().required(),
      technology_id: Joi.string().uuid().required(),
    },
  }),
  createModuleController.handle,
);

moduleRouter.get('/', listModuleController.handle);

moduleRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  detailModuleController.handle,
);

moduleRouter.get(
  '/technology_id/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  listModuleByTechnologyIdController.handle,
);

moduleRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string(),
      content: Joi.string(),
      level_id: Joi.string().uuid(),
      technology_id: Joi.string().uuid(),
    },
  }),
  updateModuleController.handle,
);

moduleRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  deleteModuleController.handle,
);
