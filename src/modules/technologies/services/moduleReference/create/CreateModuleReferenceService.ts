import { inject, injectable } from 'tsyringe';

import { ICreateModuleReferenceDto } from '@modules/technologies/dto/ICreateModuleReferenceDto';
import { ModuleReference } from '@modules/technologies/infra/typeorm/entities/ModuleReference';
import { IModuleReferenceRepository } from '@modules/technologies/repositories/IModuleReferenceRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
export class CreateModuleReferenceService {
  constructor(
    @inject('ModuleReferenceRepository')
    private moduleReferenceRepository: IModuleReferenceRepository,
  ) {}

  async execute({
    title,
    url,
    module_id,
  }: ICreateModuleReferenceDto): Promise<ModuleReference> {
    const exists = await this.moduleReferenceRepository.findByTitle(title);

    if (exists) {
      throw new AppError('Referência do Módulo já existe!');
    }

    const created = await this.moduleReferenceRepository.create({
      title,
      url,
      module_id,
    });

    return created;
  }
}
