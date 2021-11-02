import { MigrationInterface, getConnection, QueryRunner } from 'typeorm';

import levelsJSON from './levels/levels.json';

export class PopulateLevels1632530000000 implements MigrationInterface {
  public async up(): Promise<void> {
    levelsJSON.map(async level => {
      await getConnection('seed')
        .createQueryBuilder()
        .insert()
        .into('level')
        .values(level)
        .execute();
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.clearTable('level');
  }
}
