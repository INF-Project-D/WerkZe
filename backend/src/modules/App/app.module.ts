/* istanbul ignore file */
import { Argon2Module } from '@modules/Argon2/argon2.module';
import { AuthModule } from '@modules/Auth/auth.module';
import { AuthGuard } from '@modules/Auth/guards/auth.guard';
import { PrismaModule } from '@modules/Prisma/prisma.module';
import { UserModule } from '@modules/User/user.module';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [PrismaModule, Argon2Module, UserModule, AuthModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
