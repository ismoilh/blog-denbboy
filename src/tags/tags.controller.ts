import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TagsService } from './tags.service';
import {
  CreateTagRequest,
  GetTagResponse,
  GetTagsListResponse,
  UpdateTagRequest,
} from './dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiSuccessResponse } from '@blog/common';

@ApiTags('tags')
@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post()
  @ApiOperation({ summary: 'Create tag' })
  async create(
    @Body() createTagDto: CreateTagRequest,
  ): Promise<GetTagResponse> {
    return await this.tagsService.create(createTagDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tags' })
  async findAll(): Promise<GetTagsListResponse> {
    return await this.tagsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get tag' })
  async findOne(@Param('id') id: string): Promise<GetTagResponse> {
    return await this.tagsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update tag' })
  async update(
    @Param('id') id: string,
    @Body() updateTagDto: UpdateTagRequest,
  ): Promise<GetTagResponse> {
    return await this.tagsService.update(+id, updateTagDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove tag' })
  async remove(@Param('id') id: string): Promise<ApiSuccessResponse> {
    return await this.tagsService.remove(+id);
  }
}
