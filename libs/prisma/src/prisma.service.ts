import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
class PrismaService
  extends PrismaClient<Prisma.PrismaClientOptions, 'beforeExit'>
  implements OnModuleInit
{
  constructor() {
    super();
  }

  async onModuleInit(): Promise<void> {
    await this.$connect();
  }

  async enableShutdownHooks(application: INestApplication): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    this.$on('beforeExit', async (): Promise<void> => {
      await application.close();
    });
  }
}

export { PrismaService };
