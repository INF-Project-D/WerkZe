import { Argon2Module } from '@modules/Argon2/argon2.module';
import { AuthGuard } from '@modules/Auth/guards/auth.guard';
import { PrismaModule } from '@modules/Prisma/prisma.module';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';

@Module({
  imports: [PrismaModule, Argon2Module],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
