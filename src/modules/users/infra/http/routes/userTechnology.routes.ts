import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

export const userTechnologyRouter = Router();

userTechnologyRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      user_id: Joi.string().uuid().required(),
      level_id: Joi.string().uuid().required(),
      technology_id: Joi.string().uuid().required(),
      progression: Joi.number().required(),
    },
  }),
);

userTechnologyRouter.get('/');

userTechnologyRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
);

userTechnologyRouter.put(
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

userTechnologyRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
);
