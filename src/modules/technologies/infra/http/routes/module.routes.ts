import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

export const moduleRouter = Router();

moduleRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required().required(),
      description: Joi.string(),
      content: Joi.string(),
      level_id: Joi.string().uuid().required(),
      technology_id: Joi.string().uuid().required(),
    },
  }),
);
moduleRouter.get('/:id');

moduleRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
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
);

moduleRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
);
