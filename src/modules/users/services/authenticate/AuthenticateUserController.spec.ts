import { hash } from 'bcrypt';
import request from 'supertest';
import { Connection } from 'typeorm';

import { app } from '@shared/infra/http/app';
import { getConnection } from '@shared/infra/typeorm';

let connection: Connection;

describe('Authenticate User Controller', () => {
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

  it('should be able to authenticate user', async () => {
    const response = await request(app).post('/sessions').send({
      email: 'admin@admin.com',
      password: 'admin',
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('user');
    expect(response.body).toHaveProperty('token');
    expect(response.body).toHaveProperty('refresh_token');
    expect(response.body.user.name).toBe('admin');
    expect(response.body.user.email).toBe('admin@admin.com');
  });

  it('should not be able to authenticate a nonexistent user', async () => {
    const response = await request(app).post('/sessions').send({
      email: 'test@test.com',
      password: 'test',
    });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('E-mail ou senha incorretos!');
  });

  it('should not be able to authenticate with incorrect password', async () => {
    const response = await request(app).post('/sessions').send({
      email: 'admin@admin.com',
      password: 'incorrect password',
    });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('E-mail ou senha incorretos!');
  });
});
