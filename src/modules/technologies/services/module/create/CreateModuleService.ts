import { inject, injectable } from 'tsyringe';

import { ICreateModuleDto } from '@modules/technologies/dto/ICreateModuleDto';
import { Module } from '@modules/technologies/infra/typeorm/entities/Module';
import { IModuleRepository } from '@modules/technologies/repositories/IModuleRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
export class CreateModuleService {
  constructor(
    @inject('ModuleRepository')
    private moduleRepository: IModuleRepository,
  ) {}

  async execute({
    name,
    description,
    content,
    level_id,
    technology_id,
  }: ICreateModuleDto): Promise<Module> {
    const exists = await this.moduleRepository.findByName(name);

    if (exists) {
      throw new AppError('Módulo já existe!');
    }

    const created = await this.moduleRepository.create({
      name,
      description,
      content,
      level_id,
      technology_id,
    });

    return created;
  }
}
