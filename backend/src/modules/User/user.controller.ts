import { CurrentUser } from '@decorators/CurrentUser.decorator';
import { PaginationQueryInput } from '@lib/interfaces/pagination.interface';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/:id')
  async getUserById(@CurrentUser() user: User, @Param('id') id: string) {
    if (id === '@me') return user;
    return this.userService.findUserById(id, false);
  }

  @Get('/')
  async getUsers(@Query() query: PaginationQueryInput) {
    return this.userService.findUsersPagination(query);
  }
}
