import { IsBoolean } from 'class-validator';

export class ApiSuccessResponse {
  @IsBoolean()
  ok: boolean;
}
