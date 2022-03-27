import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CardList {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  type: string;

  @Column({ type: 'char', length: 4 })
  last_digits: string;

  @Column({ type: 'decimal', precision: 15, scale: 2 })
  capacity: number;

  @Column({ type: 'decimal', precision: 15, scale: 2 })
  available: number;

  @Column({ type: 'decimal', precision: 5, scale: 4 })
  interestRate: number;
}
