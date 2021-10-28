import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import { CreateQuestionController } from '@modules/quizzes/services/questions/create/CreateQuestionController';

export const questionsRouter = Router();

const createQuestionController = new CreateQuestionController();

questionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      text: Joi.string().required(),
      module_id: Joi.string().uuid().required(),
    },
  }),
  createQuestionController.handle,
);

questionsRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
);

questionsRouter.put(
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

questionsRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
);

// TODO revisar rota de busca de questões por tecnologia e modulo
questionsRouter.get(
  '/technology/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
);

questionsRouter.get(
  '/module/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
);
