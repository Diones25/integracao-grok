import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GrokModule } from './grok/grok.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GrokModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
