import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'module' })
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
  tecnology_id: string;
}
