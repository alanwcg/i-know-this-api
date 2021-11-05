import { EntityManager } from 'typeorm';

import { ICreateTechnologyDto } from '@modules/technologies/dto/ICreateTechnologyDto';

import { technologies } from './technology';

interface ITechnology extends ICreateTechnologyDto {
  id: string;
}

const technologyQuery = (technology: ITechnology) =>
  `INSERT INTO technology (id, name, description) VALUES ('${technology.id}', '${technology.name}', '${technology.description}')`;

export async function PopulateTechnology(
  transactionalEntityManager: EntityManager,
): Promise<void> {
  for (const technology of technologies) {
    await transactionalEntityManager.query(technologyQuery(technology));
  }
}
