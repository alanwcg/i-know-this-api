// import { Promise as bluebirdPromise } from 'bluebird';

import { Promise as bluebirdPromise } from 'bluebird';
import { EntityManager } from 'typeorm';

import { getConnection } from '..';

import { PopulateLevel } from './level';
import { PopulateModule } from './module';
import { PopulateTechnology } from './technology';

const populateMethodsArray = (transactionalEntityManager: EntityManager) => [
  PopulateLevel(transactionalEntityManager),
  PopulateModule(transactionalEntityManager),
  PopulateTechnology(transactionalEntityManager),
];

const generateEntityManager = async () => {
  const connection = await getConnection();
  const queryRunner = connection.createQueryRunner();
  await queryRunner.startTransaction();
  const { manager } = queryRunner;
  return { manager, queryRunner };
};

const progressMessage = async (
  _: void,
  index: number,
  length: number,
): Promise<void> => {
  console.log('Populando o banco de dados:  ', `${index + 1}/${length}`);
};

async function runSeed() {
  const { manager, queryRunner } = await generateEntityManager();

  await bluebirdPromise
    .mapSeries(populateMethodsArray(manager), progressMessage)
    .then(async () => {
      await queryRunner.commitTransaction();
    })
    .catch(async error => {
      await queryRunner.rollbackTransaction();
      console.log('Erro ao popular o banco de dados');
      throw error;
    })
    .finally(async () => {
      await queryRunner.release();
    });
}

runSeed();
