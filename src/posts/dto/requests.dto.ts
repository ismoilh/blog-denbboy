import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePostRequest {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  content: string;
  @IsNumber()
  @IsNotEmpty()
  authorId: number;
  @IsNumber()
  @IsNotEmpty()
  categoryId: number;
}

export class UpdatePostRequest extends PartialType(CreatePostRequest) {}
