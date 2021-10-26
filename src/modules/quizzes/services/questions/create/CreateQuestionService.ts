import { injectable, inject } from 'tsyringe';

import { ICreateQuestionDTO } from '@modules/quizzes/dtos/ICreateQuestionDTO';
import { Question } from '@modules/quizzes/infra/typeorm/entities/Question';
import { IQuestionsRepository } from '@modules/quizzes/repositories/IQuestionsRepository';
// import { IModuleRepository } from '@modules/technologies/repositories/IModuleRepository';
// import { AppError } from '@shared/errors/AppError';

@injectable()
export class CreateQuestionService {
  constructor(
    @inject('QuestionsRepository')
    private questionsRepository: IQuestionsRepository,
  ) {}
  // @inject('ModuleRepository') // private moduleRepository: IModuleRepository,

  async execute({ text, module_id }: ICreateQuestionDTO): Promise<Question> {
    // const module = await this.moduleRepository.findById(module_id);

    // if (!module) {
    //   throw new AppError('Módulo não encontrado');
    // }

    const questionCreated = await this.questionsRepository.create({
      text,
      module_id,
    });

    return questionCreated;
  }
}
