import { getRepository, Repository } from 'typeorm';

import { ICreateModuleReferenceDto } from '@modules/technologies/dto/ICreateModuleReferenceDto';
import { IUpdateModuleReferenceDto } from '@modules/technologies/dto/IUpdateModuleReferenceDto';
import { IModuleReferenceRepository } from '@modules/technologies/repositories/IModuleReferenceRepository';

import { ModuleReference } from '../entities/ModuleReference';

export class ModuleReferenceRepository implements IModuleReferenceRepository {
  private repository: Repository<ModuleReference>;

  constructor() {
    this.repository = getRepository(ModuleReference);
  }
  async findAll(): Promise<ModuleReference[]> {
    const list = await this.repository.find();
    return list;
  }
  async findById(id: string): Promise<ModuleReference> {
    const item = await this.repository.findOne(id);
    return item;
  }
  async update(data: IUpdateModuleReferenceDto): Promise<ModuleReference> {
    const updated = await this.repository.save(data);
    return updated;
  }
  async findByTitle(title: string): Promise<ModuleReference> {
    const item = await this.repository.findOne({ where: { title } });
    return item;
  }
  async create(data: ICreateModuleReferenceDto): Promise<ModuleReference> {
    const created = await this.repository.create(data);
    await this.repository.save(created);
    return created;
  }
  async delete(id: string): Promise<void> {
    await this.repository.softDelete(id);
  }
}
