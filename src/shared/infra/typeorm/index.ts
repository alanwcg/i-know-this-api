import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export async function getConnection(): Promise<Connection> {
  const defaultOptions = await getConnectionOptions();

  return createConnection(defaultOptions);
}
