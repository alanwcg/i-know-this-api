import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Level } from '@modules/technologies/infra/typeorm/entities/Level';
import { Technology } from '@modules/technologies/infra/typeorm/entities/Technology';

import { User } from './User';

@Entity('user_technology')
export class UserTechnology {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  user_id: string;

  @Column('uuid')
  technology_id: string;

  @Column('uuid')
  level_id: string;

  @Column('decimal')
  progression: number;

  @Exclude()
  @CreateDateColumn()
  created_at: Date;

  @Exclude()
  @UpdateDateColumn()
  updated_at: Date;

  @Exclude()
  @DeleteDateColumn()
  deleted_at: Date;

  @ManyToOne(() => User, user => user.userTechnologies)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Technology, technology => technology.userTechnologies)
  @JoinColumn({ name: 'technology_id' })
  technology: Technology;

  @ManyToOne(() => Level, level => level.userTechnologies)
  @JoinColumn({ name: 'level_id' })
  level: Level;
}
