import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

export const optionRouter = Router();

optionRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      text: Joi.string().required(),
      correct_answer: Joi.boolean().required(),
      question_id: Joi.string().uuid().required(),
    },
  }),
);
optionRouter.get('/:id');

optionRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
);

optionRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      text: Joi.string(),
      correct_answer: Joi.boolean(),
      question_id: Joi.string().uuid(),
    },
  }),
);

optionRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
);
