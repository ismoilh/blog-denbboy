import { PostStatus } from '@prisma/client';

export class Post {
  id: number;
  title: string;
  content: string;
  authorId: number;
  categoryId: number;
  status: PostStatus;
  createdAt: Date | string;
}
