import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors';

import '../../container';

import { errors } from 'celebrate';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';

import upload from '@config/upload';
import { AppError } from '@shared/errors/AppError';
import swaggerFile from '@shared/swagger.json';

import { getConnection } from '../typeorm';
import { router } from './routes';

getConnection();

export const app = express();
app.use(express.json());
app.use(cors());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use('/avatar', express.static(`${upload.tmpFolder}/avatar`));

app.use(router);

app.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'I Know This API' });
});

app.use(errors());
app.use(
  (err: Error, request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    console.log(err.message);

    return response.status(500).json({
      status: 'error',
      message: `Erro interno do servidor - ${err.message}`,
    });
  },
);
