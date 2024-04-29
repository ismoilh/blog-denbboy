import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateAuthorRequest,
  GetAuthorResponse,
  GetAuthorsListResponse,
  UpdateAuthorRequest,
} from './dto';
import { PrismaService } from '@blog/prisma';
import { ApiSuccessResponse } from '@blog/common';
import { AuthorStatus } from '@prisma/client';

const messages = {
  authorNotFound: 'Author not found',
};

@Injectable()
export class AuthorsService {
  constructor(private readonly _db: PrismaService) {}

  async create(params: CreateAuthorRequest): Promise<GetAuthorResponse> {
    const { email, name, bio } = params;

    const author = await this._db.author.create({
      data: {
        email,
        name,
        bio,
      },
    });

    return author;
  }

  async findAll(): Promise<GetAuthorsListResponse> {
    const authors = await this._db.author.findMany({
      where: {
        status: { not: AuthorStatus.deleted },
      },
    });

    return { list: authors };
  }

  async findOne(id: number): Promise<GetAuthorResponse> {
    const author = await this._db.author.findFirst({
      where: {
        id,
        status: { not: AuthorStatus.deleted },
      },
    });
    return author;
  }

  async update(
    id: number,
    params: UpdateAuthorRequest,
  ): Promise<GetAuthorResponse> {
    const author = await this._db.author.findFirst({
      where: { id },
    });
    if (!author) {
      throw new NotFoundException(messages.authorNotFound);
    }
    const response = await this._db.author.update({
      where: { id },
      data: params,
    });
    return response;
  }

  async remove(id: number): Promise<ApiSuccessResponse> {
    await this._db.author.update({
      where: { id },
      data: { status: AuthorStatus.deleted },
    });
    return { ok: true };
  }
}
