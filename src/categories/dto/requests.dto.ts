import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryRequest {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class UpdateCategoryRequest extends PartialType(CreateCategoryRequest) {}
