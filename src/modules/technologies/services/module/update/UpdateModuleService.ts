import { inject, injectable } from 'tsyringe';

import { IUpdateModuleDto } from '@modules/technologies/dto/IUpdateModuleDto';
import { Module } from '@modules/technologies/infra/typeorm/entities/Module';
import { IModuleRepository } from '@modules/technologies/repositories/IModuleRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
export class UpdateModuleService {
  constructor(
    @inject('ModuleRepository')
    private moduleRepository: IModuleRepository,
  ) {}

  async execute({
    id,
    name,
    description,
    content,
    links,
    level_id,
    technology_id,
  }: IUpdateModuleDto): Promise<Module> {
    const exists = await this.moduleRepository.findById(id);

    if (!exists) {
      throw new AppError('Módulo não encontrado!');
    }

    const updated = await this.moduleRepository.update({
      id,
      name,
      description,
      content,
      links,
      level_id,
      technology_id,
    });

    return updated;
  }
}
