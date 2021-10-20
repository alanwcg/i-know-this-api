import { hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import request from 'supertest';
import { Connection } from 'typeorm';
import { v4 as uuid } from 'uuid';

import auth from '@config/auth';
import { app } from '@shared/infra/http/app';
import { getConnection } from '@shared/infra/typeorm';

let connection: Connection;

describe('Find User By Id Controller', () => {
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

  it('should be able to get logged user data', async () => {
    const session = await request(app).post('/sessions').send({
      email: 'admin@admin.com',
      password: 'admin',
    });

    const response = await request(app)
      .get('/users/me')
      .set('Authorization', `Bearer ${session.body.token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('email');
    expect(response.body.name).toBe('admin');
    expect(response.body.email).toBe('admin@admin.com');
  });

  it('should not be able to get user data without jwt token', async () => {
    const response = await request(app).get('/users/me');

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('JWT token não enviado!');
  });

  it('should not be able to get user data with invalid jwt token', async () => {
    const response = await request(app)
      .get('/users/me')
      .set('Authorization', 'invalid jwt token');

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('JWT token inválido!');
  });

  it('should not be able to get nonexistent user data', async () => {
    const token = sign({}, auth.token_secret, {
      subject: uuid(),
      expiresIn: '1d',
    });

    const response = await request(app)
      .get('/users/me')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Usuário não encontrado!');
  });
});
