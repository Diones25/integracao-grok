import { Body, Controller, Post } from '@nestjs/common';
import { GrokService } from './grok.service';
import { PromptDeepSeekDto } from './dtos/prompt-deepseek.dto';

@Controller('grok')
export class GrokController {

  constructor(private readonly grokService: GrokService) { }
  
  @Post('send')
  async sendMessage(@Body() promptGrokDto: PromptDeepSeekDto) {
    const response = await this.grokService.getGrokResponse(promptGrokDto.prompt);
    return { response }
  }
}
