import { inject, injectable } from 'tsyringe';

import { Module } from '@modules/technologies/infra/typeorm/entities/Module';
import { IModuleRepository } from '@modules/technologies/repositories/IModuleRepository';

@injectable()
export class ListModuleService {
  constructor(
    @inject('ModuleRepository')
    private moduleRepository: IModuleRepository,
  ) {}

  async execute(): Promise<Module[]> {
    const list = await this.moduleRepository.findAll();

    return list;
  }
}
