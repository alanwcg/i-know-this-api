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

import { Option } from '@modules/quizzes/infra/typeorm/entities/Option';
import { Question } from '@modules/quizzes/infra/typeorm/entities/Question';
import { Module } from '@modules/technologies/infra/typeorm/entities/Module';

import { User } from './User';

@Entity('user_quiz')
export class UserQuiz {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  user_id: string;

  @Column('uuid')
  module_id: string;

  @Column('uuid')
  question_id: string;

  @Column('uuid')
  option_id: string;

  @Exclude()
  @CreateDateColumn()
  created_at: Date;

  @Exclude()
  @UpdateDateColumn()
  updated_at: Date;

  @Exclude()
  @DeleteDateColumn()
  deleted_at: Date;

  @ManyToOne(() => User, user => user.userQuizzes)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Module, module => module.userQuizzes)
  @JoinColumn({ name: 'module_id' })
  module: Module;

  @ManyToOne(() => Question, question => question.userQuizzes)
  @JoinColumn({ name: 'question_id' })
  question: Question;

  @ManyToOne(() => Option, option => option.userQuizzes)
  @JoinColumn({ name: 'option_id' })
  option: Option;
}
