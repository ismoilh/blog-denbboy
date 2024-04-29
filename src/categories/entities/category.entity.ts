import { CategoryStatus } from '@prisma/client';

export class Category {
  id: number;
  name: string;
  status: CategoryStatus;
  createdAt: Date | string;
}
