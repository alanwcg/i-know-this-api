import { hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import request from 'supertest';
import { Connection } from 'typeorm';
import { v4 as uuid } from 'uuid';

import auth from '@config/auth';
import { app } from '@shared/infra/http/app';
import { getConnection } from '@shared/infra/typeorm';

let connection: Connection;

describe('Update User Controller', () => {
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

  it('should be able to update user', async () => {
    const session = await request(app).post('/sessions').send({
      email: 'admin@admin.com',
      password: 'admin',
    });

    const response = await request(app)
      .put(`/users/${session.body.user.id}`)
      .set('Authorization', `Bearer ${session.body.token}`)
      .send({
        name: 'Alan Cintra',
        email: 'alancintra7@gmail.com',
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('email');
    expect(response.body.name).toBe('Alan Cintra');
    expect(response.body.email).toBe('alancintra7@gmail.com');
  });

  it('should not be able to update nonexistent user', async () => {
    const id = uuid();

    const token = sign({}, auth.token_secret, {
      subject: id,
      expiresIn: '1d',
    });

    const response = await request(app)
      .put(`/users/${id}`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Alan Cintra',
        email: 'alancintra7@gmail.com',
      });

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Usuário não encontrado!');
  });
});
