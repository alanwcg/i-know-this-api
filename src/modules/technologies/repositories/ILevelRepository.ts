import { ICreateLevelDto } from '../dto/ICreateLevelDto';
import { IUpdateLevelDto } from '../dto/IUpdateLevelDto';
import { Level } from '../infra/typeorm/entities/Level';

export interface ILevelRepository {
  findAll(): Promise<Level[]>;
  findById(id: string): Promise<Level | undefined>;
  update(data: IUpdateLevelDto): Promise<Level | undefined>;
  findByName(name: string): Promise<Level | undefined>;
  create(data: ICreateLevelDto): Promise<Level>;
  delete(id: string): Promise<void>;
}
