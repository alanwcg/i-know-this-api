import { getRepository, Repository } from 'typeorm';

import { ICreateTechnologyDto } from '@modules/technologies/dto/ICreateTechnologyDto';
import { IUpdateTechnologyDto } from '@modules/technologies/dto/IUpdateTechnologyDto';
import { ITechnologyRepository } from '@modules/technologies/repositories/ITechnologyRepository';

import { Technology } from '../entities/Technology';

export class TechnologyRepository implements ITechnologyRepository {
  private repository: Repository<Technology>;

  constructor() {
    this.repository = getRepository(Technology);
  }
  async findAll(): Promise<Technology[]> {
    const list = await this.repository.find();
    return list;
  }
  async findById(id: string): Promise<Technology> {
    const item = await this.repository.findOne(id);
    return item;
  }
  async update(data: IUpdateTechnologyDto): Promise<Technology> {
    const updated = await this.repository.save(data);
    return updated;
  }
  async findByName(name: string): Promise<Technology> {
    const item = await this.repository.findOne({ where: { name } });
    return item;
  }
  async create(data: ICreateTechnologyDto): Promise<Technology> {
    const created = await this.repository.create(data);
    await this.repository.save(created);
    return created;
  }
  async delete(id: string): Promise<void> {
    await this.repository.softDelete(id);
  }
}
