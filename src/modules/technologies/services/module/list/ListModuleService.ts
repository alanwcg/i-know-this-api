import { inject, injectable } from 'tsyringe';

import { Module } from '@modules/technologies/infra/typeorm/entities/Module';
import { IModuleRepository } from '@modules/technologies/repositories/IModuleRepository';

interface IRequest {
  technology_id?: string;
}

@injectable()
export class ListModuleService {
  constructor(
    @inject('ModuleRepository')
    private moduleRepository: IModuleRepository,
  ) {}

  async execute({ technology_id }: IRequest): Promise<Module[]> {
    if (technology_id) {
      const technologies = await this.moduleRepository.findByTechnologyId(
        technology_id,
      );

      return technologies;
    }

    const list = await this.moduleRepository.findAll();

    return list;
  }
}
