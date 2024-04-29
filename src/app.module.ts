import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { CategoriesModule } from './categories/categories.module';
import { TagsModule } from './tags/tags.module';
import { AuthorsModule } from './authors/authors.module';
import { ConfigModule } from '@blog/config';
import { PrismaModule } from '@blog/prisma';

@Module({
  imports: [
    PrismaModule,
    ConfigModule,
    PostsModule,
    CategoriesModule,
    TagsModule,
    AuthorsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
