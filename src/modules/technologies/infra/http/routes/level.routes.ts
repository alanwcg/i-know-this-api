import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import { CreateLevelController } from '@modules/technologies/services/level/create/CreateLevelController';
import { DeleteLevelController } from '@modules/technologies/services/level/delete/DeleteLevelController';
import { DetailLevelController } from '@modules/technologies/services/level/detail/DetailLevelController';
import { ListLevelController } from '@modules/technologies/services/level/list/ListLevelController';
import { UpdateLevelController } from '@modules/technologies/services/level/update/UpdateLevelController';

const createLevelController = new CreateLevelController();
const listLevelController = new ListLevelController();
const detailLevelController = new DetailLevelController();
const updateLevelController = new UpdateLevelController();
const deleteLevelController = new DeleteLevelController();

export const levelRouter = Router();

levelRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string(),
    },
  }),
  createLevelController.handle,
);

levelRouter.get('/', listLevelController.handle);

levelRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  detailLevelController.handle,
);

levelRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      name: Joi.string(),
      description: Joi.string(),
    },
  }),
  updateLevelController.handle,
);

levelRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  deleteLevelController.handle,
);
