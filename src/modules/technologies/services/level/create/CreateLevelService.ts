import { inject, injectable } from 'tsyringe';

import { ICreateLevelDto } from '@modules/technologies/dto/ICreateLevelDto';
import { Level } from '@modules/technologies/infra/typeorm/entities/Level';
import { ILevelRepository } from '@modules/technologies/repositories/ILevelRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
export class CreateLevelService {
  constructor(
    @inject('LevelRepository')
    private levelRepository: ILevelRepository,
  ) {}

  async execute({ name, description }: ICreateLevelDto): Promise<Level> {
    const exists = await this.levelRepository.findByName(name);

    if (exists) {
      throw new AppError('Level já existe!');
    }

    const created = await this.levelRepository.create({
      name,
      description,
    });

    return created;
  }
}
