import { Router } from 'express';

import { sessionsRouter } from '@modules/users/infra/http/routes/sessions.routes';
import { usersRouter } from '@modules/users/infra/http/routes/users.routes';

export const router = Router();

router.use('/users', usersRouter);
router.use('/sessions', sessionsRouter);
