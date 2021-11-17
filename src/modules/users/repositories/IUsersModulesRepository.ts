import { ICreateUserModuleDTO } from '../dtos/ICreateUserModuleDTO';
import { UserModule } from '../infra/typeorm/entities/UserModule';

export interface IFindByModuleId {
  user_id: string;
  module_id: string;
}

export interface IUsersModulesRepository {
  create(data: ICreateUserModuleDTO): Promise<UserModule>;
  update(data: UserModule): Promise<UserModule>;
  findById(id: string): Promise<UserModule>;
  findByModuleId(data: IFindByModuleId): Promise<UserModule>;
}
