import { Router } from 'express';

import { questionsRouter } from '@modules/quizzes/infra/http/routes/questions.routes';
import { passwordRouter } from '@modules/users/infra/http/routes/password.routes';
import { sessionsRouter } from '@modules/users/infra/http/routes/sessions.routes';
import { usersRouter } from '@modules/users/infra/http/routes/users.routes';

export const router = Router();

router.use('/users', usersRouter);
router.use('/sessions', sessionsRouter);
router.use('/password', passwordRouter);
router.use('/questions', questionsRouter);
