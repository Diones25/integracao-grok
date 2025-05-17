import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class GrokService {
  private readonly apiKey: string | undefined;
  private readonly baseUrl: string = 'https://api.x.ai/v1';

  constructor(private configService: ConfigService) {
    this.apiKey = this.configService.get<string>('GROK_API_KEY');
  }

  async getGrokResponse(prompt: string): Promise<any> {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    };

    const data = {
      model: 'grok-3-latest',
      messages: [{ role: "user", content: prompt}]
    }

    try {
      const response = await axios.post(`${this.baseUrl}/chat/completions`, data, { headers });
      return response.data;
    } catch (error) {
      console.error('Error ao chamar a API do Grok:', error.response?.data || error.message);
      throw new BadRequestException(`Erro ao chamar a API do Grok: ${error.message}`);
    }
  }
}
