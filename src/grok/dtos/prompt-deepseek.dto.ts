import { IsString } from "class-validator";

export class PromptDeepSeekDto {

  @IsString({ message: 'Deve ser uma string' })
  prompt: string;
}