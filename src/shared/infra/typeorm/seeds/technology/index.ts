import { getConnection } from '../..';
import technologyJSON from './express.json';

export async function PopulateTechnology(): Promise<void> {
  const connection = await getConnection();

  for (const technology of technologyJSON) {
    await connection.query(
      `INSERT INTO technology (id, name, description) VALUES (${technology.id} ${technology.name}, ${technology.description})`,
    );
  }

  await connection.close();
}
