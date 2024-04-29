import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { PrismaModule } from '@blog/prisma';

@Module({
  imports: [PrismaModule],
  controllers: [AuthorsController],
  providers: [AuthorsService],
})
export class AuthorsModule {}
