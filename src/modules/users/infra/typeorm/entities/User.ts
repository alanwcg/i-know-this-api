import { Exclude, Expose } from 'class-transformer';
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

  @Exclude()
  @Column()
  avatar: string;

  @Expose({ name: 'avatar_url' })
  getAvatarURL(): string | null {
    if (!this.avatar) {
      return null;
    }

    switch (process.env.STORAGE) {
      case 'local':
        return `${process.env.API_URL}/avatar/${this.avatar}`;
      case 's3':
        return `${process.env.AWS_BUCKET_URL}/avatar/${this.avatar}`;
      default:
        return null;
    }
  }

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

  @OneToMany(() => UserTechnology, userTechnology => userTechnology.user)
  userTechnologies: UserTechnology[];

  @OneToMany(() => UserQuiz, userQuiz => userQuiz.user)
  userQuizzes: UserQuiz[];
}
