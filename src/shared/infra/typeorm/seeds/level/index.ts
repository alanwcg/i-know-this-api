import { getConnection } from '../..';
import levelJSON from './level.json';

export async function PopulateLevel(): Promise<void> {
  const connection = await getConnection();

  for (const level of levelJSON) {
    await connection.query(
      `INSERT INTO level (id, name, description) VALUES (${level.id} ${level.name}, ${level.description})`,
    );
  }

  await connection.close();
}
