import { inject, injectable } from 'tsyringe';

import { ILevelRepository } from '@modules/technologies/repositories/ILevelRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  id: string;
}

@injectable()
export class DeleteLevelService {
  constructor(
    @inject('LevelRepository')
    private levelRepository: ILevelRepository,
  ) {}

  async execute({ id }: IRequest): Promise<void> {
    const checkLevelExists = await this.levelRepository.findById(id);

    if (!checkLevelExists) {
      throw new AppError('Level não encontrado!');
    }

    await this.levelRepository.delete(id);
  }
}
