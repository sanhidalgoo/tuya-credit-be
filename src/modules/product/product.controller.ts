import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('products')
export class ProductController {
  @Get('/')
  async findAll() {
    return 'This action returns all products';
  }

  @Get('/{id}')
  async findOne(id: string) {
    return `This action returns a #${id} product`;
  }

  @Post('/create')
  async create(@Body() data: any) {
    return `This action adds a new product with name ${data.name}`;
  }

  @Post('/update')
  async update(id: string, data: any) {
    return `This action updates the #${id} product with name ${data.name}`;
  }

  @Post('/delete')
  async remove(@Body('id') id: string) {
    return `This action removes the #${id} product`;
  }
}
