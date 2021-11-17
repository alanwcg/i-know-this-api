import { classToClass } from 'class-transformer';
import { inject, injectable } from 'tsyringe';

import { IModuleRepository } from '@modules/technologies/repositories/IModuleRepository';
import { UserModule } from '@modules/users/infra/typeorm/entities/UserModule';
import { IUsersModulesRepository } from '@modules/users/repositories/IUsersModulesRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  user_id: string;
  module_id: string;
}

@injectable()
export class FindUserModuleService {
  constructor(
    @inject('ModuleRepository')
    private moduleRepository: IModuleRepository,

    @inject('UsersModulesRepository')
    private usersModulesRepository: IUsersModulesRepository,
  ) {}

  async execute({ user_id, module_id }: IRequest): Promise<UserModule> {
    const module = await this.moduleRepository.findById(module_id);

    if (!module) {
      throw new AppError('Módulo não encontrado!', 404);
    }

    const userModule = await this.usersModulesRepository.findByModuleId({
      user_id,
      module_id,
    });

    return classToClass(userModule);
  }
}
