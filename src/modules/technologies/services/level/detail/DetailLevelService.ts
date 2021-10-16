import { inject, injectable } from 'tsyringe';

import { Level } from '@modules/technologies/infra/typeorm/entities/Level';
import { ILevelRepository } from '@modules/technologies/repositories/ILevelRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  id: string;
}

@injectable()
export class DetailLevelService {
  constructor(
    @inject('LevelRepository')
    private levelRepository: ILevelRepository,
  ) {}

  async execute({ id }: IRequest): Promise<Level> {
    const exists = await this.levelRepository.findById(id);

    if (!exists) {
      throw new AppError('Level não encontrado!');
    }

    return exists;
  }
}
