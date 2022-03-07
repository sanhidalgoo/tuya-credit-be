import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardList } from './entities/card-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CardList])],
  controllers: [],
  providers: [],
})
export class CardListModule {}
