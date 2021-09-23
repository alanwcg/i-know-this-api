import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'user_tecnology' })
export class UserTecnology {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  level_id: string;

  @Column('uuid')
  user_id: string;

  @Column('uuid')
  tecnology_id: string;

  @Column('decimal')
  progression: number;

  // @ManyToOne(() => User, user => user.tokens)
  // @JoinColumn({ name: 'user_id' })
  // user: User;
}
