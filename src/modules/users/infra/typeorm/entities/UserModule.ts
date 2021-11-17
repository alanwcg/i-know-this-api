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
import { Module } from '@modules/technologies/infra/typeorm/entities/Module';

import { User } from './User';

@Entity('user_module')
export class UserModule {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  user_id: string;

  @Column('uuid')
  module_id: string;

  @Column('uuid')
  level_id: string;

  @Column('integer')
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

  @ManyToOne(() => User, user => user.userModules)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Module, module => module.userModules)
  @JoinColumn({ name: 'module_id' })
  module: Module;

  @ManyToOne(() => Level, level => level.userModules)
  @JoinColumn({ name: 'level_id' })
  level: Level;
}
