export interface IHashProvider {
  generateHash(password: string): Promise<string>;
  compareHash(password: string, hashedPassword: string): Promise<boolean>;
}
