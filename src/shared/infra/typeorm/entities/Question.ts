import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'question' })
export class Question {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  text: string;

  @Column('uuid')
  module_id: string;
}
