import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tecnology' })
export class Tecnology {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('text')
  description: string;
}
