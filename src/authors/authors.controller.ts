import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthorsService } from './authors.service';
import {
  CreateAuthorRequest,
  GetAuthorResponse,
  GetAuthorsListResponse,
  UpdateAuthorRequest,
} from './dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiSuccessResponse } from '@blog/common';

@ApiTags('authors')
@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  @ApiOperation({ summary: 'Create author' })
  async create(
    @Body() createAuthorDto: CreateAuthorRequest,
  ): Promise<GetAuthorResponse> {
    return await this.authorsService.create(createAuthorDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all authors' })
  async findAll(): Promise<GetAuthorsListResponse> {
    return await this.authorsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get author' })
  async findOne(@Param('id') id: string): Promise<GetAuthorResponse> {
    return await this.authorsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update author' })
  async update(
    @Param('id') id: string,
    @Body() updateAuthorDto: UpdateAuthorRequest,
  ): Promise<GetAuthorResponse> {
    return await this.authorsService.update(+id, updateAuthorDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove author' })
  async remove(@Param('id') id: string): Promise<ApiSuccessResponse> {
    return await this.authorsService.remove(+id);
  }
}
