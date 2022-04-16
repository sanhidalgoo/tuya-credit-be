import { CreditCard } from 'src/modules/card-list/entities/credit-card.entity';
import { Product } from 'src/modules/product/entities/product.entity';

export const swaggerConfig = {
  extraModels: [CreditCard, Product],
};
