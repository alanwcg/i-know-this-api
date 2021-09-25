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

import { Question } from '@modules/quizzes/infra/typeorm/entities/Question';
import { UserQuiz } from '@modules/users/infra/typeorm/entities/UserQuiz';

import { Level } from './Level';
import { ModuleReference } from './ModuleReference';
import { Technology } from './Technology';

@Entity('module')
export class Module {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('text')
  content: string;

  @Column('uuid')
  level_id: string;

  @Column('uuid')
  technology_id: string;

  @Exclude()
  @CreateDateColumn()
  created_at: Date;

  @Exclude()
  @UpdateDateColumn()
  updated_at: Date;

  @Exclude()
  @DeleteDateColumn()
  deleted_at: Date;

  @ManyToOne(() => Level, level => level.modules)
  @JoinColumn({ name: 'level_id' })
  level: Level;

  @ManyToOne(() => Technology, technology => technology.modules)
  @JoinColumn({ name: 'technology_id' })
  technology: Technology;

  @OneToMany(() => ModuleReference, moduleReference => moduleReference.module)
  references: ModuleReference[];

  @OneToMany(() => Question, question => question.module)
  questions: Question[];

  @OneToMany(() => UserQuiz, userQuiz => userQuiz.module)
  userQuizzes: UserQuiz[];
}
