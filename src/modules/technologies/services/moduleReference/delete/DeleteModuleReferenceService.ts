import { inject, injectable } from 'tsyringe';

import { IModuleReferenceRepository } from '@modules/technologies/repositories/IModuleReferenceRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  id: string;
}

@injectable()
export class DeleteModuleReferenceService {
  constructor(
    @inject('ModuleRefenceRepository')
    private moduleReferenceRepository: IModuleReferenceRepository,
  ) {}

  async execute({ id }: IRequest): Promise<void> {
    const exists = await this.moduleReferenceRepository.findById(id);

    if (!exists) {
      throw new AppError('Referência de módulo não encontrado!');
    }

    await this.moduleReferenceRepository.delete(id);
  }
}
