import { ICreateModuleDto } from '../dto/ICreateModuleDto';
import { IUpdateModuleDto } from '../dto/IUpdateModuleDto';
import { Module } from '../infra/typeorm/entities/Module';

export interface IModuleRepository {
  findAll(): Promise<Module[]>;
  findById(id: string): Promise<Module | undefined>;
  update(data: IUpdateModuleDto): Promise<Module | undefined>;
  findByName(name: string): Promise<Module | undefined>;
  create(data: ICreateModuleDto): Promise<Module>;
  delete(id: string): Promise<void>;
}
