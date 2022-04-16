import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Product reference
   * @example 'UK01440104502501'
   */
  @Column({ type: 'varchar' })
  ref: string;

  /**
   * Product name
   * @example 'COMPUTADOR LENOVO'
   */
  @Column({ type: 'varchar' })
  name: string;

  /**
   * Product image url
   * @example '1234'
   */
  @Column({ type: 'varchar' })
  imageUrl: string;

  /**
   * Product description
   * @example 'Lorem ipsum...'
   */
  @Column({ type: 'varchar' })
  description: string;

  /**
   * Product original price in COP
   * @example '12000000.00'
   */
  @Column({ type: 'decimal', precision: 20, scale: 2 })
  originalPrice: number;

  /**
   * Product credit card price in COP
   * @example '11000000.00'
   */
  @Column({ type: 'decimal', precision: 20, scale: 2 })
  creditCardPrice: number;

  /**
   * Product other method price in COP
   * @example '12000000.00'
   */
  @Column({ type: 'decimal', precision: 20, scale: 2 })
  otherMethodPrice: number;

  /**
   * Product provider name or warehouse name
   * @example 'Éxito', 'Tuya'
   */
  @Column({ type: 'varchar' })
  provider: string;
}
