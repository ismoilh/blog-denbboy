import { Injectable, NotFoundException } from '@nestjs/common';
import {
  GetPostsListResponse,
  UpdatePostRequest,
  CreatePostRequest,
  GetPostResponse,
} from './dto';
import { PrismaService } from '@blog/prisma';
import { ApiSuccessResponse } from '@blog/common';
import { PostStatus } from '@prisma/client';

const messages = {
  postNotFound: 'Post not found',
  authorNotFound: 'Author not found',
  categoryNotFound: 'Category not found',
};

@Injectable()
export class PostsService {
  constructor(private readonly _db: PrismaService) {}

  async create(params: CreatePostRequest): Promise<GetPostResponse> {
    const { title, content, authorId, categoryId } = params;

    const author = await this._db.author.findUnique({
      where: { id: authorId },
    });
    if (!author) {
      throw new NotFoundException(messages.authorNotFound);
    }

    const category = await this._db.category.findUnique({
      where: { id: categoryId },
    });
    if (!category) {
      throw new NotFoundException(messages.categoryNotFound);
    }

    const post = await this._db.post.create({
      data: {
        title,
        content,
        authorId,
        categoryId,
      },
    });

    return post;
  }

  async findAll(): Promise<GetPostsListResponse> {
    const posts = await this._db.post.findMany({
      where: {
        status: { not: PostStatus.deleted },
      },
    });

    return { list: posts };
  }

  async findOne(id: number): Promise<GetPostResponse> {
    const post = await this._db.post.findFirst({
      where: {
        id,
        status: { not: PostStatus.deleted },
      },
    });
    return post;
  }

  async update(
    id: number,
    params: UpdatePostRequest,
  ): Promise<GetPostResponse> {
    const post = await this._db.post.findFirst({
      where: { id },
    });
    if (!post) {
      throw new NotFoundException(messages.postNotFound);
    }
    const response = await this._db.post.update({
      where: { id },
      data: params,
    });
    return response;
  }

  async remove(id: number): Promise<ApiSuccessResponse> {
    await this._db.post.update({
      where: { id },
      data: { status: PostStatus.deleted },
    });
    return { ok: true };
  }
}
