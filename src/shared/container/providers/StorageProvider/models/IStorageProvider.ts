import { ISaveFileDTO } from '../dtos/ISaveFileDTO';

export interface IStorageProvider {
  save(data: ISaveFileDTO): Promise<string>;
  delete(file: string, folder: string): Promise<void>;
}
