import { EntityManager } from 'typeorm';

import { ICreateQuestionDTO } from '@modules/quizzes/dtos/ICreateQuestionDTO';

import { questions } from './questions';

interface IQuestion extends ICreateQuestionDTO {
  id: string;
}

const questionQuery = (question: IQuestion) =>
  `INSERT INTO question (id, text, module_id) VALUES ('${question.id}', '${question.text}', '${question.module_id}' )`;

export async function PopulateQuestion(
  transactionalEntityManager: EntityManager,
): Promise<void> {
  for (const question of questions) {
    const { id, text, module_id } = question;
    const queryObject = { id, text, module_id };

    await transactionalEntityManager.query(questionQuery(queryObject));
  }
}
