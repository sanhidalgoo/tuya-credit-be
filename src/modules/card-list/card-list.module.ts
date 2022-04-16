import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreditCard } from './entities/credit-card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CreditCard])],
  controllers: [],
  providers: [],
})
export class CardListModule {}
