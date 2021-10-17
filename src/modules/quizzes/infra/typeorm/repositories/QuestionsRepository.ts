import { getRepository, Repository } from 'typeorm';

import { ICreateQuestionDTO } from '@modules/quizzes/dtos/ICreateQuestionDTO';
import { IQuestionsRepository } from '@modules/quizzes/repositories/IQuestionsRepository';

import { Question } from '../entities/Question';

export class QuestionsRepository implements IQuestionsRepository {
  private ormRepository: Repository<Question>;

  constructor() {
    this.ormRepository = getRepository(Question);
  }

  async create(data: ICreateQuestionDTO): Promise<Question> {
    const question = this.ormRepository.create(data);

    await this.ormRepository.save(question);

    return question;
  }

  async update(question: Question): Promise<Question> {
    const updatedQuestion = await this.ormRepository.save(question);

    return updatedQuestion;
  }

  async delete(id: string): Promise<void> {
    await this.ormRepository.softDelete(id);
  }

  async findById(id: string): Promise<Question> {
    const question = await this.ormRepository.findOne(id);

    return question;
  }

  async findAllByTechnologyId(id: string): Promise<Question[]> {
    // TODO revisar implementação da busca por tecnologia
    const questions = await this.ormRepository.find({
      where: { technology_id: id },
    });

    return questions;
  }

  async findAllByModuleId(id: string): Promise<Question[]> {
    const questions = await this.ormRepository.find({
      where: { module_id: id },
    });

    return questions;
  }

  public async findAll(): Promise<Question[]> {
    return this.ormRepository.find();
  }
}
