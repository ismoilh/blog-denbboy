import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateTagRequest,
  GetTagResponse,
  GetTagsListResponse,
  UpdateTagRequest,
} from './dto';
import { PrismaService } from '@blog/prisma';
import { ApiSuccessResponse } from '@blog/common';
import { TagStatus } from '@prisma/client';
const messages = {
  tagNotFound: 'Tag not found',
};

@Injectable()
export class TagsService {
  constructor(private readonly _db: PrismaService) {}

  async create(params: CreateTagRequest): Promise<GetTagResponse> {
    const { name } = params;

    const tag = await this._db.tag.create({
      data: {
        name,
      },
    });

    return tag;
  }

  async findAll(): Promise<GetTagsListResponse> {
    const tags = await this._db.tag.findMany({
      where: {
        status: { not: TagStatus.deleted },
      },
    });

    return { list: tags };
  }

  async findOne(id: number): Promise<GetTagResponse> {
    const tag = await this._db.tag.findFirst({
      where: {
        id,
        status: { not: TagStatus.deleted },
      },
    });
    return tag;
  }

  async update(id: number, params: UpdateTagRequest): Promise<GetTagResponse> {
    const tag = await this._db.tag.findFirst({
      where: { id },
    });
    if (!tag) {
      throw new NotFoundException(messages.tagNotFound);
    }
    const response = await this._db.tag.update({
      where: { id },
      data: params,
    });
    return response;
  }

  async remove(id: number): Promise<ApiSuccessResponse> {
    await this._db.tag.update({
      where: { id },
      data: { status: TagStatus.deleted },
    });
    return { ok: true };
  }
}
