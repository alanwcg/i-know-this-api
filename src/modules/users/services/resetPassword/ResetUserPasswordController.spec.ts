import { hash } from 'bcrypt';
import request from 'supertest';
import { Connection } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { app } from '@shared/infra/http/app';
import { getConnection } from '@shared/infra/typeorm';

let connection: Connection;
let id: string;
let token: string;

describe('Reset User Password Controller', () => {
  beforeAll(async () => {
    connection = await getConnection();
    await connection.runMigrations();

    id = uuid();
    token = uuid();
    const password = await hash('admin', 10);

    await connection.query(
      `INSERT INTO "user"(id, name, email, password) values('${id}', 'admin', 'admin@admin.com', '${password}')`,
    );
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('should be able to reset user password', async () => {
    await connection.query(
      `INSERT INTO "user_token"(refresh_token, expiration_date, user_id) values('${token}', '2025-01-01', '${id}')`,
    );

    const response = await request(app)
      .post('/password/reset')
      .query({
        token,
      })
      .send({
        password: '123456',
      });

    expect(response.status).toBe(204);
  });

  it('should not be able to reset user password with invalid token', async () => {
    const response = await request(app)
      .post('/password/reset')
      .query({
        token: uuid(),
      })
      .send({
        password: '123456',
      });

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Token não encontrado!');
  });

  it('should not be able to reset user password with expired token', async () => {
    await connection.query(
      `INSERT INTO "user_token"(refresh_token, expiration_date, user_id) values('${token}', '2020-01-01', '${id}')`,
    );

    const response = await request(app)
      .post('/password/reset')
      .query({
        token,
      })
      .send({
        password: '123456',
      });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Token expirado!');
  });
});
