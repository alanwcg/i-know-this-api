import { EntityManager } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { ICreateOptionDTO } from '@modules/quizzes/dtos/ICreateOptionDTO';
import { ICreateQuestionDTO } from '@modules/quizzes/dtos/ICreateQuestionDTO';

import { questions } from './questions';

interface IQuestion extends ICreateQuestionDTO {
  id: string;
}

const questionQuery = (question: IQuestion) =>
  `INSERT INTO question (id, text, module_id) VALUES ('${question.id}', '${question.text}', '${question.module_id}' )`;

interface IOption extends ICreateOptionDTO {
  id: string;
}

const optionQuery = (option: IOption) =>
  `INSERT INTO option (id, text, correct_answer, question_id) VALUES ('${option.id}', '${option.text}', '${option.correct_answer}', '${option.question_id}')`;

export async function PopulateQuestionAndOption(
  transactionalEntityManager: EntityManager,
): Promise<void> {
  for (const question of questions) {
    const { id, text, module_id } = question;
    const queryObject = { id, text, module_id };

    await transactionalEntityManager.query(questionQuery(queryObject));

    for (const option of question.options) {
      const { text, correct_answer } = option;
      const queryOptionObject = {
        id: uuid(),
        text,
        correct_answer,
        question_id: id,
      };

      await transactionalEntityManager.query(optionQuery(queryOptionObject));
    }
  }
}
