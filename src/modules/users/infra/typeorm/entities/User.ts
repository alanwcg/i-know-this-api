import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { UserQuiz } from './UserQuiz';
import { UserTechnology } from './UserTechnology';
import { UserToken } from './UserToken';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Column()
  avatar: string;

  @Exclude()
  @CreateDateColumn()
  created_at: Date;

  @Exclude()
  @UpdateDateColumn()
  updated_at: Date;

  @Exclude()
  @DeleteDateColumn()
  deleted_at: Date;

  @OneToMany(() => UserToken, userToken => userToken.user)
  userTokens: UserToken[];

  @OneToMany(() => UserTechnology, userTechnology => userTechnology.user, {
    eager: true,
  })
  userTechnologies: UserTechnology[];

  @OneToMany(() => UserQuiz, userQuiz => userQuiz.user)
  userQuizzes: UserQuiz[];
}
