import { v4 as uuid } from 'uuid';

import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';
import { User } from '@modules/users/infra/typeorm/entities/User';

import { IUsersRepository } from '../IUsersRepository';

export class FakeUsersRepository implements IUsersRepository {
  users: User[] = [];

  async create(data: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, {
      id: uuid(),
      ...data,
    });

    this.users.push(user);

    return user;
  }

  async update(user: User): Promise<User> {
    const updatedUsers = this.users.map(item => {
      if (item.id === user.id) {
        return user;
      }

      return item;
    });

    this.users = updatedUsers;

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = this.users.find(user => user.id === id);

    return user;
  }

  async findByName(name: string): Promise<User> {
    const user = this.users.find(user => user.name === name);

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find(user => user.email === email);

    return user;
  }
  async delete(id: string): Promise<void> {
    const updatedUsers = this.users.filter(user => user.id !== id);

    this.users = updatedUsers;
  }
}
