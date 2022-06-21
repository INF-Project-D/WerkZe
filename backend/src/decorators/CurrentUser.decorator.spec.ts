import { CurrentUser } from './CurrentUser.decorator';
import * as httpMock from 'node-mocks-http';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import { ROUTE_ARGS_METADATA } from '@nestjs/common/constants';
import { UserRole } from '@prisma/client';

describe('@CurrentUser', () => {
  function getParamDecoratorFactory(decorator) {
    class Test {
      public test(@decorator() _value) {
        return;
      }
    }

    const args = Reflect.getMetadata(ROUTE_ARGS_METADATA, Test, 'test');
    return args[Object.keys(args)[0]].factory;
  }

  it('should enhance the method with the current user metadata', () => {
    const req = httpMock.createRequest();
    const res = httpMock.createResponse();
    const mockUser = {
      about: 'I am a user',
      id: '1',
      categories: [],
      createdAt: new Date(),
      email: 'test@test.test',
      firstName: 'John',
      lastName: 'Doe',
      likesTo: [],
      phoneNumber: '',
      role: UserRole.ADMIN,
      updatedAt: new Date(),
    };
    req.user = mockUser;
    const ctx = new ExecutionContextHost([req, res], null, null);
    const factory = getParamDecoratorFactory(CurrentUser);
    const user = factory(null, ctx);
    expect(user).toEqual(mockUser);
  });
});
