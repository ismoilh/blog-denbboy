import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTagRequest {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class UpdateTagRequest extends PartialType(CreateTagRequest) {}
