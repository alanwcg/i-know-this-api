import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

export const userQuizRouter = Router();

userQuizRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      user_id: Joi.string().uuid().required(),
      module_id: Joi.string().uuid().required(),
      question_id: Joi.string().uuid().required(),
      option_id: Joi.string().uuid().required(),
    },
  }),
);

userQuizRouter.get('/');

userQuizRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
);

userQuizRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      user_id: Joi.string().uuid(),
      module_id: Joi.string().uuid(),
      question_id: Joi.string().uuid(),
      option_id: Joi.string().uuid(),
    },
  }),
);

userQuizRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
);
