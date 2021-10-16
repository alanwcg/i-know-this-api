import { inject, injectable } from 'tsyringe';

import { ModuleReference } from '@modules/technologies/infra/typeorm/entities/ModuleReference';
import { IModuleReferenceRepository } from '@modules/technologies/repositories/IModuleReferenceRepository';

@injectable()
export class ListModuleReferenceService {
  constructor(
    @inject('ModuleReferenceRepository')
    private moduleReferenceRepository: IModuleReferenceRepository,
  ) {}

  async execute(): Promise<ModuleReference[]> {
    const list = await this.moduleReferenceRepository.findAll();

    return list;
  }
}
