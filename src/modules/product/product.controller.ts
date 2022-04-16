import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ProductDto } from './dtos/product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { ProductService } from './product.service';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('/')
  async findAll() {
    const products = await this.productService.findAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'All products fetched successfully',
      data: products,
    };
  }

  @Get('/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const product = await this.productService.findOne(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Product fetched successfully',
      data: product,
    };
  }

  @Post('/create')
  async create(@Body() data: ProductDto) {
    const product = this.productService.create(data);
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Product created successfully',
      data: product,
    };
  }

  @Post('/:id/update')
  async update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateProductDto) {
    const product = await this.productService.update(id, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'Product updated successfully',
      data: product,
    };
  }

  @Post('/:id/remove')
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.productService.destroy(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Product deleted successfully',
    };
  }
}
