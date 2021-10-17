import { ICreateQuestionDTO } from '@modules/quizzes/dtos/ICreateQuestionDTO';
import { Question } from '@modules/quizzes/infra/typeorm/entities/Question';

export interface IQuestionsRepository {
  create(data: ICreateQuestionDTO): Promise<Question>;
  update(question: Question): Promise<Question>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<Question | undefined>;
  findAll(): Promise<Question[]>;
  findAllByTechnologyId(technology_id: string): Promise<Question[]>;
  findAllByModuleId(module_id: string): Promise<Question[]>;
}
