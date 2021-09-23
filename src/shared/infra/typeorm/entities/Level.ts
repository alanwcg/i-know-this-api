import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'level' })
export class Level {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;
}
