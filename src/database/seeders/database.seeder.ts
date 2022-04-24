import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import { Product } from '../../modules/product/entities/product.entity';
import { CreditCard } from '../../modules/card-list/entities/credit-card.entity';
import { User } from '../../modules/user/entities/user.entity';

export default class DatabaseSeeder implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await factory(Product)().createMany(20);

    const users = await factory(User)().createMany(20);

    await factory(CreditCard)()
      .map(async (creditCard) => {
        const random = Math.floor(Math.random() * users.length);
        creditCard.userKey = users[random].userKey;
        return creditCard;
      })
      .createMany(30);
  }
}
