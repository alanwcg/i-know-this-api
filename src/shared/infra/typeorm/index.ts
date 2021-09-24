import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export async function getConnection(): Promise<Connection> {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      database:
        process.env.NODE_ENV === 'test'
          ? 'tcc-db-test'
          : defaultOptions.database,
    }),
  );
}
