import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'user_token' })
export class UserToken {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  refresh_token: string;

  @Column('timestamp with time zone')
  expires_date: Date;

  @Column('uuid')
  user_id: string;

  // @ManyToOne(() => User, user => user.tokens)
  // @JoinColumn({ name: 'user_id' })
  // user: User;
}
