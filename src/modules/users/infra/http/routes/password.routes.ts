import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import { ResetUserPasswordController } from '@modules/users/services/resetPassword/ResetUserPasswordController';
import { SendForgotPasswordMailController } from '@modules/users/services/sendForgotPasswordMail/SendForgotPasswordMailController';

export const passwordRouter = Router();

const sendForgotPasswordMailController = new SendForgotPasswordMailController();
const resetUserPasswordController = new ResetUserPasswordController();

passwordRouter.post(
  '/forgot',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required(),
    },
  }),
  sendForgotPasswordMailController.handle,
);

passwordRouter.post(
  '/reset',
  celebrate({
    [Segments.BODY]: {
      password: Joi.string().required(),
    },
    [Segments.QUERY]: {
      token: Joi.string().uuid().required(),
    },
  }),
  resetUserPasswordController.handle,
);
