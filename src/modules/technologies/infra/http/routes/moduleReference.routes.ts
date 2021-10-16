import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import { CreateModuleReferenceController } from '@modules/technologies/services/moduleReference/create/CreateModuleReferenceController';
import { DeleteModuleReferenceController } from '@modules/technologies/services/moduleReference/delete/DeleteModuleReferenceController';
import { DetailModuleReferenceController } from '@modules/technologies/services/moduleReference/detail/DetailModuleReferenceController';
import { ListModuleReferenceController } from '@modules/technologies/services/moduleReference/list/ListModuleReferenceController';
import { UpdateModuleReferenceController } from '@modules/technologies/services/moduleReference/update/UpdateModuleReferenceController';

const createModuleReferenceController = new CreateModuleReferenceController();
const listModuleReferenceController = new ListModuleReferenceController();
const detailModuleReferenceController = new DetailModuleReferenceController();
const updateModuleReferenceController = new UpdateModuleReferenceController();
const deleteModuleReferenceController = new DeleteModuleReferenceController();

export const moduleReferenceRouter = Router();

moduleReferenceRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      url: Joi.string().required(),
      module_id: Joi.string().uuid().required(),
    },
  }),
  createModuleReferenceController.handle,
);

moduleReferenceRouter.get('/', listModuleReferenceController.handle);

moduleReferenceRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  detailModuleReferenceController.handle,
);

moduleReferenceRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      title: Joi.string(),
      url: Joi.string(),
      module_id: Joi.string().uuid(),
    },
  }),
  updateModuleReferenceController.handle,
);

moduleReferenceRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  deleteModuleReferenceController.handle,
);
