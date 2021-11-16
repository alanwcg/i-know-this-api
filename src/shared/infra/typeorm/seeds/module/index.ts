import { EntityManager } from 'typeorm';

import { ICreateModuleDto } from '@modules/technologies/dto/ICreateModuleDto';

import { modules } from './modules';

interface IModule extends ICreateModuleDto {
  id: string;
}

const moduleQuery = (module: IModule) =>
  `INSERT INTO module (id, name, description, content, links, level_id, technology_id) VALUES ('${module.id}', '${module.name}', '${module.description}', '${module.content}', '${module.links}','${module.level_id}', '${module.technology_id}' )`;

export async function PopulateModule(
  transactionalEntityManager: EntityManager,
): Promise<void> {
  for (const module of modules) {
    await transactionalEntityManager.query(moduleQuery(module));
  }
}
