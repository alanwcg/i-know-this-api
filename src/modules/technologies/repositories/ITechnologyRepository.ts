import { ICreateTechnologyDto } from '../dto/ICreateTechnologyDto';
import { IUpdateTechnologyDto } from '../dto/IUpdateTechnologyDto';
import { Technology } from '../infra/typeorm/entities/Technology';

export interface ITechnologyRepository {
  findAll(): Promise<Technology[]>;
  findById(id: string): Promise<Technology | undefined>;
  update(data: IUpdateTechnologyDto): Promise<Technology | undefined>;
  findByName(name: string): Promise<Technology | undefined>;
  create(data: ICreateTechnologyDto): Promise<Technology>;
  delete(id: string): Promise<void>;
}
