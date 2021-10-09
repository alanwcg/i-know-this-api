import { hash, compare } from 'bcrypt';

import { IHashProvider } from '../models/IHashProvider';

export class BCryptHashProvider implements IHashProvider {
  async generateHash(password: string): Promise<string> {
    return hash(password, 10);
  }

  async compareHash(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return compare(password, hashedPassword);
  }
}
