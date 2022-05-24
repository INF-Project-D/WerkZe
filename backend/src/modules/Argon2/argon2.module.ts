import { Global, Module } from '@nestjs/common';
import { Argon2CryptoProvider } from './argon2.provider';

@Global()
@Module({
  providers: [Argon2CryptoProvider],
  exports: [Argon2CryptoProvider],
})
export class Argon2Module {}
