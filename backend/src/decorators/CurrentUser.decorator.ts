import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '@prisma/client';
import { Request } from 'express';

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext): Omit<User, 'password'> => {
    const request = context.switchToHttp().getRequest<Request>();

    return request.user;
  },
);
