/* istanbul ignore file */
import { NestFactory } from '@nestjs/core';
import { User } from '@prisma/client';
import { AppModule } from './modules/App/app.module';

declare module 'express' {
  interface Request {
    user: Omit<User, 'password'>;
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
