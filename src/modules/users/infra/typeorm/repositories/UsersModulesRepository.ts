import { getRepository, Repository } from 'typeorm';

import { ICreateUserModuleDTO } from '@modules/users/dtos/ICreateUserModuleDTO';
import {
  IFindByModuleId,
  IUsersModulesRepository,
} from '@modules/users/repositories/IUsersModulesRepository';

import { UserModule } from '../entities/UserModule';

export class UsersModulesRepository implements IUsersModulesRepository {
  private repository: Repository<UserModule>;

  constructor() {
    this.repository = getRepository(UserModule);
  }

  async create(data: ICreateUserModuleDTO): Promise<UserModule> {
    const userModule = this.repository.create(data);

    await this.repository.save(userModule);

    return userModule;
  }

  async update(data: UserModule): Promise<UserModule> {
    const userModule = await this.repository.save(data);

    return userModule;
  }

  async findById(id: string): Promise<UserModule> {
    const userModule = await this.repository.findOne(id);

    return userModule;
  }

  async findByModuleId({
    user_id,
    module_id,
  }: IFindByModuleId): Promise<UserModule> {
    const userModule = await this.repository.findOne({ user_id, module_id });

    return userModule;
  }
}
