import { inject, injectable } from 'tsyringe';

import { ModuleReference } from '@modules/technologies/infra/typeorm/entities/ModuleReference';
import { IModuleReferenceRepository } from '@modules/technologies/repositories/IModuleReferenceRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  id: string;
}

@injectable()
export class DetailModuleReferenceService {
  constructor(
    @inject('ModuleReferenceRepository')
    private moduleReferenceRepository: IModuleReferenceRepository,
  ) {}

  async execute({ id }: IRequest): Promise<ModuleReference> {
    const exists = await this.moduleReferenceRepository.findById(id);

    if (!exists) {
      throw new AppError('Módule não encontrado!');
    }

    return exists;
  }
}
