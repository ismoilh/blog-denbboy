import { TagStatus } from '@prisma/client';

export class Tag {
  id: number;
  name: string;
  status: TagStatus;
  createdAt: Date | string;
}
