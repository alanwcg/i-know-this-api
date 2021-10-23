import { getRepository, Repository } from 'typeorm';

import { ICreateLevelDto } from '@modules/technologies/dto/ICreateLevelDto';
import { IUpdateLevelDto } from '@modules/technologies/dto/IUpdateLevelDto';
import { ILevelRepository } from '@modules/technologies/repositories/ILevelRepository';

import { Level } from '../entities/Level';

export class repository implements ILevelRepository {
  private repository: Repository<Level>;

  constructor() {
    this.repository = getRepository(Level);
  }
  async findAll(): Promise<Level[]> {
    const list = await this.repository.find();
    return list;
  }
  async findById(id: string): Promise<Level> {
    const item = await this.repository.findOne(id);
    return item;
  }
  async update(data: IUpdateLevelDto): Promise<Level> {
    const updated = await this.repository.save(data);
    return updated;
  }
  async findByName(name: string): Promise<Level> {
    const item = await this.repository.findOne({ where: { name } });
    return item;
  }
  async create(data: ICreateLevelDto): Promise<Level> {
    const created = await this.repository.create(data);
    await this.repository.save(created);
    return created;
  }
  async delete(id: string): Promise<void> {
    await this.repository.softDelete(id);
  }
}
