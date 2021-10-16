import { inject, injectable } from 'tsyringe';

import { Level } from '@modules/technologies/infra/typeorm/entities/Level';
import { ILevelRepository } from '@modules/technologies/repositories/ILevelRepository';

@injectable()
export class ListLevelService {
  constructor(
    @inject('LevelRepository')
    private levelRepository: ILevelRepository,
  ) {}

  async execute(): Promise<Level[]> {
    const list = await this.levelRepository.findAll();

    return list;
  }
}
