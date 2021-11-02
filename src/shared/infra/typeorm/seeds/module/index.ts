import { getConnection } from '../..';
import moduleJSON from './modules';

export async function PopulateModule(): Promise<void> {
  const connection = await getConnection();

  for (const module of moduleJSON) {
    await connection.query(
      `INSERT INTO module (id, name, description) VALUES (${module.id} ${module.name}, ${module.description})`,
    );
  }

  await connection.close();
}
