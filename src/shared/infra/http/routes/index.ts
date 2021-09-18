import { Router } from 'express';

import { usersRouter } from '@modules/users/infra/http/routes/users.routes';

export const routes = Router();

routes.use('/users', usersRouter);
