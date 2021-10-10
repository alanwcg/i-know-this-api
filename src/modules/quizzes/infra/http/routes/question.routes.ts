import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

export const questionRouter = Router();

questionRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      text: Joi.string().required(),
      module_id: Joi.string().uuid().required(),
    },
  }),
);
questionRouter.get('/:id');

questionRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
);

questionRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      text: Joi.string(),
      module_id: Joi.string().uuid(),
    },
  }),
);

questionRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
);
