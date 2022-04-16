import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CardList {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Credit card type
   * @example 'MASTERCARD', 'PRIVADA'
   */
  @Column({ type: 'varchar' })
  type: string;

  /**
   * Credit card last digits
   * @example '1234'
   */
  @Column({ type: 'char', length: 4 })
  last_digits: string;

  /**
   * Credit card capacity in COP
   * @example '1000000.00'
   */
  @Column({ type: 'decimal', precision: 15, scale: 2 })
  capacity: number;

  /**
   * Credit card available amount in COP
   * @example '500000.00'
   */
  @Column({ type: 'decimal', precision: 15, scale: 2 })
  available: number;

  /**
   * Credit card interest rate in %
   * @example '1.0097'
   */
  @Column({ type: 'decimal', precision: 5, scale: 4 })
  interestRate: number;
}
