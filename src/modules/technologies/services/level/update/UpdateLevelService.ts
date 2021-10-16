import { inject, injectable } from 'tsyringe';

import { IUpdateLevelDto } from '@modules/technologies/dto/IUpdateLevelDto';
import { Level } from '@modules/technologies/infra/typeorm/entities/Level';
import { ILevelRepository } from '@modules/technologies/repositories/ILevelRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
export class UpdateLevelService {
  constructor(
    @inject('LevelRepository')
    private levelRepository: ILevelRepository,
  ) {}

  async execute({ id, name, description }: IUpdateLevelDto): Promise<Level> {
    const exists = await this.levelRepository.findById(id);

    if (!exists) {
      throw new AppError('Level não encontrado!');
    }

    const updated = await this.levelRepository.update({
      id,
      name,
      description,
    });

    return updated;
  }
}
