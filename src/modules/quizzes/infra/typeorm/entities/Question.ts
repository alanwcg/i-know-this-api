import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Module } from '@modules/technologies/infra/typeorm/entities/Module';
import { UserQuiz } from '@modules/users/infra/typeorm/entities/UserQuiz';

import { Option } from './Option';

@Entity('question')
export class Question {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  text: string;

  @Column('uuid')
  module_id: string;

  @Exclude()
  @CreateDateColumn()
  created_at: Date;

  @Exclude()
  @UpdateDateColumn()
  updated_at: Date;

  @Exclude()
  @DeleteDateColumn()
  deleted_at: Date;

  @ManyToOne(() => Module, module => module.questions)
  @JoinColumn({ name: 'module_id' })
  module: Module;

  @OneToMany(() => Option, option => option.question, { eager: true })
  options: Option[];

  @OneToMany(() => UserQuiz, userQuiz => userQuiz.question)
  userQuizzes: UserQuiz[];
}
