import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from './dtos/user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  async findAll(): Promise<UserDto[]> {
    return User.find();
  }

  async findOne(id: number): Promise<UserDto> {
    const user = await User.findOne({ id });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async create(user: UserDto): Promise<UserDto> {
    return User.create(user).save();
  }

  async update(id: number, user: UpdateUserDto): Promise<UserDto> {
    const data = await User.findOne({ id });
    if (!data) throw new NotFoundException('User not updated');
    await User.update({ id }, user);
    return User.findOne({ id });
  }

  async destroy(id: number) {
    const data = await User.findOne({ id });
    if (!data) throw new NotFoundException('user not deleted');
    await User.delete({ id });
    return { deleted: true };
  }
}
