import { Module } from '@nestjs/common';
import { GrokService } from './grok.service';
import { GrokController } from './grok.controller';

@Module({
  providers: [GrokService],
  controllers: [GrokController]
})
export class GrokModule {}
