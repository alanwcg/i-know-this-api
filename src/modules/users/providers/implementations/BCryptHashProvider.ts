import { hash, compare } from 'bcrypt';

import { IHashProvider } from '../models/IHashProvider';

export class BCryptHashProvider implements IHashProvider {
  async generateHash(payload: string): Promise<string> {
    return hash(payload, 10);
  }

  async compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}
