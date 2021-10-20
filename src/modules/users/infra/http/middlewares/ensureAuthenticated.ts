import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import auth from '@config/auth';
import { AppError } from '@shared/errors/AppError';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token não enviado!', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, auth.token_secret) as ITokenPayload;

    const { sub } = decoded;

    request.user = {
      id: sub,
    };

    return next();
  } catch (error) {
    throw new AppError('JWT token inválido!', 401);
  }
}
