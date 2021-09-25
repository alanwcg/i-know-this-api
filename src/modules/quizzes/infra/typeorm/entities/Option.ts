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

import { UserQuiz } from '@modules/users/infra/typeorm/entities/UserQuiz';

import { Question } from './Question';

@Entity('option')
export class Option {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  text: string;

  @Column('boolean')
  correct_answer: boolean;

  @Column('uuid')
  question_id: string;

  @Exclude()
  @CreateDateColumn()
  created_at: Date;

  @Exclude()
  @UpdateDateColumn()
  updated_at: Date;

  @Exclude()
  @DeleteDateColumn()
  deleted_at: Date;

  @ManyToOne(() => Question, question => question.options)
  @JoinColumn({ name: 'question_id' })
  question: Question;

  @OneToMany(() => UserQuiz, userQuiz => userQuiz.option)
  userQuizzes: UserQuiz[];
}
