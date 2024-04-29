import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateCategoryRequest,
  GetCategoriesListResponse,
  GetCategoryResponse,
  UpdateCategoryRequest,
} from './dto';
import { ApiSuccessResponse } from '@blog/common';
import { PrismaService } from '@blog/prisma';
import { CategoryStatus } from '@prisma/client';
const messages = {
  categoryNotFound: 'Category not found',
};

@Injectable()
export class CategoriesService {
  constructor(private readonly _db: PrismaService) {}

  async create(params: CreateCategoryRequest): Promise<GetCategoryResponse> {
    const { name } = params;

    const category = await this._db.category.create({
      data: {
        name,
      },
    });

    return category;
  }

  async findAll(): Promise<GetCategoriesListResponse> {
    const categories = await this._db.category.findMany({
      where: {
        status: { not: CategoryStatus.deleted },
      },
    });

    return { list: categories };
  }

  async findOne(id: number): Promise<GetCategoryResponse> {
    const category = await this._db.category.findFirst({
      where: {
        id,
        status: { not: CategoryStatus.deleted },
      },
    });
    return category;
  }

  async update(
    id: number,
    params: UpdateCategoryRequest,
  ): Promise<GetCategoryResponse> {
    const category = await this._db.category.findFirst({
      where: { id },
    });
    if (!category) {
      throw new NotFoundException(messages.categoryNotFound);
    }
    const response = await this._db.category.update({
      where: { id },
      data: params,
    });
    return response;
  }

  async remove(id: number): Promise<ApiSuccessResponse> {
    await this._db.category.update({
      where: { id },
      data: { status: CategoryStatus.deleted },
    });
    return { ok: true };
  }
}
