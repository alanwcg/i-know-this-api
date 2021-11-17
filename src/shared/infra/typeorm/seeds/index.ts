// import { Promise as bluebirdPromise } from 'bluebird';

import { Promise as bluebirdPromise } from 'bluebird';
import { EntityManager } from 'typeorm';

import { getConnection } from '..';

import { PopulateLevel } from './level';
import { PopulateModule } from './module';
import { PopulateQuestionAndOption } from './question';
import { PopulateTechnology } from './technology';

const populateMethodsArray = async (
  transactionalEntityManager: EntityManager,
) => [
  await PopulateLevel(transactionalEntityManager),
  await PopulateTechnology(transactionalEntityManager),
  await PopulateModule(transactionalEntityManager),
  await PopulateQuestionAndOption(transactionalEntityManager),
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
      console.log('\nErro ao popular o banco de dados:\n', error);
      // throw error;
    })
    .finally(async () => {
      await queryRunner.release();
    });
}

runSeed();
