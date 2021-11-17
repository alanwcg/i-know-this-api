import { classToClass } from 'class-transformer';
import { inject, injectable } from 'tsyringe';

import { ICreateUserModuleDTO } from '@modules/users/dtos/ICreateUserModuleDTO';
import { UserModule } from '@modules/users/infra/typeorm/entities/UserModule';
import { IUsersModulesRepository } from '@modules/users/repositories/IUsersModulesRepository';

@injectable()
export class CreateUserModuleService {
  constructor(
    @inject('UsersModulesRepository')
    private usersModulesRepository: IUsersModulesRepository,
  ) {}

  async execute({
    user_id,
    level_id,
    module_id,
    progression,
  }: ICreateUserModuleDTO): Promise<UserModule> {
    const checkUserModuleExists =
      await this.usersModulesRepository.findByModuleId({
        user_id,
        module_id,
      });

    if (checkUserModuleExists) {
      checkUserModuleExists.progression = progression;

      const userModule = await this.usersModulesRepository.update(
        checkUserModuleExists,
      );

      return classToClass(userModule);
    }

    const userModule = await this.usersModulesRepository.create({
      user_id,
      level_id,
      module_id,
      progression,
    });

    return classToClass(userModule);
  }
}
