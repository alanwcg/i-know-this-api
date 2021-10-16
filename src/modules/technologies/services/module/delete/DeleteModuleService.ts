import { inject, injectable } from 'tsyringe';

import { IModuleRepository } from '@modules/technologies/repositories/IModuleRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  id: string;
}

@injectable()
export class DeleteModuleService {
  constructor(
    @inject('ModuleRepository')
    private moduleRepository: IModuleRepository,
  ) {}

  async execute({ id }: IRequest): Promise<void> {
    const exists = await this.moduleRepository.findById(id);

    if (!exists) {
      throw new AppError('Módulo não encontrado!');
    }

    await this.moduleRepository.delete(id);
  }
}
