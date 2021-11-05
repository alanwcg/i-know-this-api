import { EntityManager } from 'typeorm';

import { ICreateLevelDto } from '@modules/technologies/dto/ICreateLevelDto';

import { levels } from './level';

interface ILevel extends ICreateLevelDto {
  id: string;
}

const levelQuery = (level: ILevel) =>
  `INSERT INTO level (id, name, description) VALUES ('${level.id}', '${level.name}', '${level.description}')`;

export async function PopulateLevel(
  transactionalEntityManager: EntityManager,
): Promise<void> {
  for (const level of levels) {
    await transactionalEntityManager.query(levelQuery(level));
  }
}
