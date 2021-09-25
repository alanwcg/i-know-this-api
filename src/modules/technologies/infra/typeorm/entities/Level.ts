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

import { UserTechnology } from '@modules/users/infra/typeorm/entities/UserTechnology';

import { Module } from './Module';

@Entity('level')
export class Level {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Exclude()
  @CreateDateColumn()
  created_at: Date;

  @Exclude()
  @UpdateDateColumn()
  updated_at: Date;

  @Exclude()
  @DeleteDateColumn()
  deleted_at: Date;

  @OneToMany(() => UserTechnology, userTechnology => userTechnology.level)
  userTechnologies: UserTechnology[];

  @OneToMany(() => Module, module => module.level)
  modules: Module[];
}
