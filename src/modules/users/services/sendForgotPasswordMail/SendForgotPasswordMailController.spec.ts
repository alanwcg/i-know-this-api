import { hash } from 'bcrypt';
import { Server } from 'http';
import request from 'supertest';
import { Connection } from 'typeorm';

import { app } from '@shared/infra/http/app';
import { getConnection } from '@shared/infra/typeorm';

let connection: Connection;
let api: Server;

describe('Send Forgot Password Mail Controller', () => {
  beforeAll(async () => {
    connection = await getConnection();
    await connection.runMigrations();

    const password = await hash('admin', 10);

    await connection.query(
      `INSERT INTO "user"(name, email, password) values('admin', 'admin@admin.com', '${password}')`,
    );

    await new Promise(resolve => {
      setTimeout(() => {
        api = app.listen(3334);
        resolve(api);
      }, 2000);
    });
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
    await new Promise(resolve => setTimeout(() => resolve(api.close()), 2000));
  });

  it('should be able to send a forgot password mail to user', async () => {
    const response = await request(api).post('/password/forgot').send({
      email: 'admin@admin.com',
    });

    expect(response.status).toBe(204);
  });

  it('should not be able to send mail to a nonexistent user', async () => {
    const response = await request(app).post('/password/forgot').send({
      email: 'nonexistent user email',
    });

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Usuário não encontrado!');
  });
});
