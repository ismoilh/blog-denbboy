import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PrismaModule } from '@blog/prisma';

@Module({
  imports: [PrismaModule],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
