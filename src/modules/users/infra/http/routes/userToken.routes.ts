import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

export const userTokenRouter = Router();

userTokenRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      refresh_token: Joi.string().required(),
      expires_date: Joi.date().required(),
      user_id: Joi.string().uuid().required(),
    },
  }),
);

userTokenRouter.get('/');

userTokenRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
);

userTokenRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      refresh_token: Joi.string(),
      expires_date: Joi.date(),
      user_id: Joi.string().uuid(),
    },
  }),
);

userTokenRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
);
