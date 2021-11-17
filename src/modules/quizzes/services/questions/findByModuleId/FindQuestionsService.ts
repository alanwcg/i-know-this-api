import { classToClass } from 'class-transformer';
import { inject, injectable } from 'tsyringe';

import { Question } from '@modules/quizzes/infra/typeorm/entities/Question';
import { IQuestionsRepository } from '@modules/quizzes/repositories/IQuestionsRepository';
import { IModuleRepository } from '@modules/technologies/repositories/IModuleRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  module_id?: string;
}

@injectable()
export class FindQuestionsService {
  constructor(
    @inject('ModuleRepository')
    private modulesRepository: IModuleRepository,

    @inject('QuestionsRepository')
    private questionsRepository: IQuestionsRepository,
  ) {}

  async execute({ module_id }: IRequest): Promise<Question[]> {
    if (module_id) {
      const module = await this.modulesRepository.findById(module_id);

      if (!module) {
        throw new AppError('Módulo não encontrado!', 404);
      }

      const questions = await this.questionsRepository.findAllByModuleId(
        module_id,
      );

      return classToClass(questions);
    }

    const questions = await this.questionsRepository.findAll();

    return classToClass(questions);
  }
}
