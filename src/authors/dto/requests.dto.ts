import { PartialType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAuthorRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  bio?: string;
}

export class UpdateAuthorRequest extends PartialType(CreateAuthorRequest) {}
