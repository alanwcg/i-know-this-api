import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import { CreateTechnologyController } from '@modules/technologies/services/technology/create/CreateTechnologyController';
import { DeleteTechnologyController } from '@modules/technologies/services/technology/delete/DeleteTechnologyController';
import { DetailTechnologyController } from '@modules/technologies/services/technology/detail/DetailTechnologyController';
import { ListTechnologyController } from '@modules/technologies/services/technology/list/ListTechnologyController';
import { UpdateTechnologyController } from '@modules/technologies/services/technology/update/UpdateTechnologyController';

const createTechnologyController = new CreateTechnologyController();
const listTechnologyController = new ListTechnologyController();
const detailTechnologyController = new DetailTechnologyController();
const updateTechnologyController = new UpdateTechnologyController();
const deleteTechnologyController = new DeleteTechnologyController();

export const technologyRouter = Router();

technologyRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string(),
    },
  }),
  createTechnologyController.handle,
);
technologyRouter.get('/', listTechnologyController.handle);

technologyRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  detailTechnologyController.handle,
);

technologyRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string(),
    },
  }),
  updateTechnologyController.handle,
);

technologyRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  deleteTechnologyController.handle,
);
