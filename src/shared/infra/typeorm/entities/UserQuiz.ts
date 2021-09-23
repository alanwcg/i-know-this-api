import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'user_quiz' })
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

  // @ManyToOne(() => User, user => user.tokens)
  // @JoinColumn({ name: 'user_id' })
  // user: User;
}
