import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ default: '中' })
  priority: string;

  @Column({ type: 'date', nullable: true })
  dueDate: Date;

  @Column({ default: false })
  completed: boolean;
}

