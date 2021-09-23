import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'option' })
export class Option {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  text: string;

  @Column('boolean')
  correct_answer: boolean;

  @Column('uuid')
  question_id: string;
}
