import { EntityManager } from 'typeorm';

import { ICreateOptionDTO } from '@modules/quizzes/dtos/ICreateOptionDTO';

import { questions } from '../question/questions';

interface IOption extends ICreateOptionDTO {
  id: string;
}

const optionQuery = (option: IOption) =>
  `INSERT INTO option (id, text, correct_answer,question_id) VALUES ('${option.id}', '${option.text}', '${option.question_id}' )`;

export async function PopulateOption(
  transactionalEntityManager: EntityManager,
): Promise<void> {
  for (const question of questions) {
    const { id } = question;

    for (const option of question.options) {
      const { text, question_id } = option;
      const queryObject = { id, text, question_id };

      await transactionalEntityManager.query(optionQuery(queryObject));
    }
  }
}
