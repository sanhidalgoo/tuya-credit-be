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
import { UserDto } from './dtos/user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserService } from './user.service';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  async findAll() {
    const users = await this.userService.findAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'All users fetched successfully',
      data: users,
    };
  }

  @Get('/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const product = await this.userService.findOne(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'User fetched successfully',
      data: product,
    };
  }

  @Post('/create')
  async create(@Body() data: UserDto) {
    const user = await this.userService.create(data);
    return {
      statusCode: HttpStatus.CREATED,
      message: 'User created successfully',
      data: user,
    };
  }

  @Post('/:id/update')
  async update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateUserDto) {
    const user = await this.userService.update(id, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User updated successfully',
      data: user,
    };
  }

  @Post('/:id/remove')
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.userService.destroy(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'User deleted successfully',
    };
  }
}
