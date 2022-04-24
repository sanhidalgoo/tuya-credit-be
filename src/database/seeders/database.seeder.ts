import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import { Product } from '../../modules/product/entities/product.entity';

export default class DatabaseSeeder implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await factory(Product)().createMany(10);
  }
}
