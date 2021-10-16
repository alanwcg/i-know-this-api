import { inject, injectable } from 'tsyringe';

import { Module } from '@modules/technologies/infra/typeorm/entities/Module';
import { IModuleRepository } from '@modules/technologies/repositories/IModuleRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  id: string;
}

@injectable()
export class DetailModuleService {
  constructor(
    @inject('ModuleRepository')
    private moduleRepository: IModuleRepository,
  ) {}

  async execute({ id }: IRequest): Promise<Module> {
    const exists = await this.moduleRepository.findById(id);

    if (!exists) {
      throw new AppError('Module não encontrado!');
    }

    return exists;
  }
}
