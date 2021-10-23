import { hash } from 'bcrypt';
import fs from 'fs';
import { sign } from 'jsonwebtoken';
import path from 'path';
import request from 'supertest';
import { Connection } from 'typeorm';
import { v4 as uuid } from 'uuid';

import auth from '@config/auth';
import { app } from '@shared/infra/http/app';
import { getConnection } from '@shared/infra/typeorm';

let connection: Connection;
let id: string;
let filePath: string;

describe('Update User Avatar Controller', () => {
  beforeAll(async () => {
    connection = await getConnection();
    await connection.runMigrations();

    id = uuid();
    const password = await hash('admin', 10);

    await connection.query(
      `INSERT INTO "user"(id, name, email, password) values('${id}', 'admin', 'admin@admin.com', '${password}')`,
    );

    filePath = path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      '..',
      'tmp',
      'avatar',
      'f7a4ab09-eec6-4052-9b53-4e13b08747c4-avatar.png',
    );
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();

    await fs.promises.unlink(
      path.resolve(
        __dirname,
        '..',
        '..',
        '..',
        '..',
        '..',
        'tmp',
        'f7a4ab09-eec6-4052-9b53-4e13b08747c4-avatar.png',
      ),
    );
    await fs.promises.unlink(
      path.resolve(
        __dirname,
        '..',
        '..',
        '..',
        '..',
        '..',
        'tmp',
        'avatar',
        `${id}-avatar.png`,
      ),
    );
  });

  it('should be able to update user avatar', async () => {
    const session = await request(app).post('/sessions').send({
      email: 'admin@admin.com',
      password: 'admin',
    });

    const response = await request(app)
      .patch('/users/avatar')
      .set('Authorization', `Bearer ${session.body.token}`)
      .attach('avatar', filePath);

    expect(response.status).toBe(204);
  });

  it('should not be able to update user avatar without jwt token', async () => {
    const response = await request(app).patch('/users/avatar');

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('JWT token não enviado!');
  });

  it('should not be able to update user avatar with invalid jwt token', async () => {
    const response = await request(app)
      .patch('/users/avatar')
      .set('Authorization', 'invalid jwt token');

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('JWT token inválido!');
  });

  it('should not be able to update avatar of nonexistent user', async () => {
    const token = sign({}, auth.token_secret, {
      subject: uuid(),
      expiresIn: '1d',
    });
    const response = await request(app)
      .patch('/users/avatar')
      .set('Authorization', `Bearer ${token}`)
      .attach('avatar', filePath);

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Usuário não encontrado!');
  });
});
