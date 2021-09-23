import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'module_reference' })
export class ModuleReference {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  url: string;

  @Column('uuid')
  module_id: string;
}
