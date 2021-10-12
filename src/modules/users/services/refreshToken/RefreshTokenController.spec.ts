import { hash } from 'bcrypt';
import request from 'supertest';
import { Connection } from 'typeorm';

import { app } from '@shared/infra/http/app';
import { getConnection } from '@shared/infra/typeorm';

let connection: Connection;

describe('Refresh Token Controller', () => {
  beforeAll(async () => {
    connection = await getConnection();
    await connection.runMigrations();

    const password = await hash('admin', 10);

    await connection.query(
      `INSERT INTO "user"(name, email, password) values('admin', 'admin@admin.com', '${password}')`,
    );
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('should be able to refresh user token', async () => {
    const session = await request(app).post('/sessions').send({
      email: 'admin@admin.com',
      password: 'admin',
    });

    const response = await request(app).post('/sessions/refresh-token').send({
      refresh_token: session.body.refresh_token,
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
    expect(response.body).toHaveProperty('refresh_token');
  });

  it('should not be able to refresh invalid user token', async () => {
    const response = await request(app).post('/sessions/refresh-token').send({
      refresh_token: 'invalid refresh_token',
    });

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Refresh Token não encontrado!');
  });
});
