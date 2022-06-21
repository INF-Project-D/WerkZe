import { UserRole } from '@prisma/client';
import { Roles } from './Roles.decorator';

describe('@Roles', () => {
  class TestWithMethod {
    @Roles([UserRole.ADMIN])
    public static test() {
      return;
    }
  }

  it('should enhance the method with the role metadata', () => {
    expect(Reflect.getMetadata('roles', TestWithMethod.test)).toEqual([
      UserRole.ADMIN,
    ]);
  });
});
