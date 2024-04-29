import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import {
  CreatePostRequest,
  GetPostResponse,
  GetPostsListResponse,
  UpdatePostRequest,
} from './dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiSuccessResponse } from '@blog/common';

@ApiTags('posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @ApiOperation({ summary: 'Create post' })
  async create(
    @Body() createPostDto: CreatePostRequest,
  ): Promise<GetPostResponse> {
    return await this.postsService.create(createPostDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all posts' })
  async findAll(): Promise<GetPostsListResponse> {
    return await this.postsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get post' })
  async findOne(@Param('id') id: string): Promise<GetPostResponse> {
    return await this.postsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update post' })
  async update(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostRequest,
  ): Promise<GetPostResponse> {
    return await this.postsService.update(+id, updatePostDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete post' })
  async remove(@Param('id') id: string): Promise<ApiSuccessResponse> {
    return await this.postsService.remove(+id);
  }
}
