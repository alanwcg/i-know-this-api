import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

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
);

moduleReferenceRouter.get('/:id');

moduleReferenceRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
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
);

moduleReferenceRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
);
