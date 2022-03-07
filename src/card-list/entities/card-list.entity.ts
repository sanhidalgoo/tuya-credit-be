import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/** Example entity */
@Entity()
export class CardList {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'text' })
  description: string;
}
