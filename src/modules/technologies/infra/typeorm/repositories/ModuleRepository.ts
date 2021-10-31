import { getRepository, Repository } from 'typeorm';

import { ICreateModuleDto } from '@modules/technologies/dto/ICreateModuleDto';
import { IUpdateModuleDto } from '@modules/technologies/dto/IUpdateModuleDto';
import { IModuleRepository } from '@modules/technologies/repositories/IModuleRepository';

import { Module } from '../entities/Module';

export class ModuleRepository implements IModuleRepository {
  private repository: Repository<Module>;

  constructor() {
    this.repository = getRepository(Module);
  }
  async findAll(): Promise<Module[]> {
    const list = await this.repository.find();
    return list;
  }
  async findById(id: string): Promise<Module> {
    const item = await this.repository.findOne(id);
    return item;
  }
  async update(data: IUpdateModuleDto): Promise<Module> {
    const updated = await this.repository.save(data);
    return updated;
  }
  async findByName(name: string): Promise<Module> {
    const item = await this.repository.findOne({ name });
    return item;
  }
  async create(data: ICreateModuleDto): Promise<Module> {
    const created = await this.repository.create(data);
    await this.repository.save(created);
    return created;
  }
  async delete(id: string): Promise<void> {
    await this.repository.softDelete(id);
  }
}
