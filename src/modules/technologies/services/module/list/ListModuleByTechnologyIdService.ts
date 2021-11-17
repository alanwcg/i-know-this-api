import { inject, injectable } from 'tsyringe';

import { Module } from '@modules/technologies/infra/typeorm/entities/Module';
import { IModuleRepository } from '@modules/technologies/repositories/IModuleRepository';

@injectable()
export class ListModuleByTechnologyIdService {
  constructor(
    @inject('ModuleRepository')
    private moduleRepository: IModuleRepository,
  ) {}

  async execute(id: string): Promise<Module[]> {
    const list = await this.moduleRepository.findByTechnologyId(id);

    return list;
  }
}
