import { Option } from '../infra/typeorm/entities/Option';

export interface IOptionsRepository {
  create(data: Option): Promise<Option>;
  delete(id: string): Promise<void>;
  update(option: Option): Promise<Option>;
  findById(id: string): Promise<Option | undefined>;
  findByQuestionId(question_id: string): Promise<Option[]>;
  findCorrectOptionByQuestionId(
    question_id: string,
  ): Promise<Option | undefined>;
}
