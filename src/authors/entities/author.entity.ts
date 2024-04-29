import { AuthorStatus } from '@prisma/client';

export class Author {
  id: number;
  name: string;
  email: string;
  bio?: string;
  status: AuthorStatus;
  createdAt: Date | string;
}
