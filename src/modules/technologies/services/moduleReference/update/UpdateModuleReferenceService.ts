import { inject, injectable } from 'tsyringe';

import { IUpdateModuleReferenceDto } from '@modules/technologies/dto/IUpdateModuleReferenceDto';
import { ModuleReference } from '@modules/technologies/infra/typeorm/entities/ModuleReference';
import { IModuleReferenceRepository } from '@modules/technologies/repositories/IModuleReferenceRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
export class UpdateModuleReferenceService {
  constructor(
    @inject('ModuleReferenceRepository')
    private moduleReferenceRepository: IModuleReferenceRepository,
  ) {}

  async execute({
    id,
    title,
    url,
    module_id,
  }: IUpdateModuleReferenceDto): Promise<ModuleReference> {
    const exists = await this.moduleReferenceRepository.findById(id);

    if (!exists) {
      throw new AppError('Referência do módulo não encontrada!');
    }

    const updated = await this.moduleReferenceRepository.update({
      id,
      title,
      url,
      module_id,
    });

    return updated;
  }
}
