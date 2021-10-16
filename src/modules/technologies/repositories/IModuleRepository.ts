import { ICreateModuleDto } from '../dto/ICreateModuleDto';
import { IUpdateModuleDto } from '../dto/IUpdateModuleDto';
import { Module } from '../infra/typeorm/entities/Module';

export interface IModuleRepository {
  findAll(): Promise<Module[]>;
  findById(id): Promise<Module | undefined>;
  update(data: IUpdateModuleDto): Promise<Module | undefined>;
  findByName(name): Promise<Module | undefined>;
  create(data: ICreateModuleDto): Promise<Module>;
  delete(id): Promise<void>;
}
