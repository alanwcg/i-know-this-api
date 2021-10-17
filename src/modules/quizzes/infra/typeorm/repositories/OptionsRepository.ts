import { getRepository, Repository } from 'typeorm';

import { IOptionsRepository } from '@modules/quizzes/repositories/IOptionsRepository';

import { Option } from '../entities/Option';

export class OptionsRepository implements IOptionsRepository {
  private ormRepository: Repository<Option>;

  constructor() {
    this.ormRepository = getRepository(Option);
  }

  async create(data: Option): Promise<Option> {
    const option = this.ormRepository.create(data);

    await this.ormRepository.save(option);

    return option;
  }

  async delete(id: string): Promise<void> {
    await this.ormRepository.softDelete(id);
  }

  async update(option: Option): Promise<Option> {
    const updatedOption = await this.ormRepository.save(option);

    return updatedOption;
  }

  async findById(id: string): Promise<Option> {
    const option = await this.ormRepository.findOne(id);

    return option;
  }

  async findByQuestionId(question_id: string): Promise<Option[]> {
    const options = await this.ormRepository.find({
      where: { question_id },
    });

    return options;
  }

  async findCorrectOptionByQuestionId(question_id: string): Promise<Option> {
    const options = await this.ormRepository.findOne({
      where: { question_id, is_correct: true },
    });

    return options;
  }
}
