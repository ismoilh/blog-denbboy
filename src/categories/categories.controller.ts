import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  CreateCategoryRequest,
  GetCategoriesListResponse,
  GetCategoryResponse,
  UpdateCategoryRequest,
} from './dto';
import { ApiSuccessResponse } from '@blog/common';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @ApiOperation({ summary: 'Create category' })
  async create(
    @Body() createCategoryDto: CreateCategoryRequest,
  ): Promise<GetCategoryResponse> {
    return await this.categoriesService.create(createCategoryDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all categories' })
  async findAll(): Promise<GetCategoriesListResponse> {
    return await this.categoriesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get category' })
  async findOne(@Param('id') id: string): Promise<GetCategoryResponse> {
    return await this.categoriesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update category' })
  async update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryRequest,
  ): Promise<GetCategoryResponse> {
    return await this.categoriesService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove category' })
  async remove(@Param('id') id: string): Promise<ApiSuccessResponse> {
    return await this.categoriesService.remove(+id);
  }
}
