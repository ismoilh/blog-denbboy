import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger';
import { ConfigService, EnvVariablesKey } from '@blog/config';
import { ValidationPipe } from '@nestjs/common';

void (async (): Promise<void> => {
  const app = await NestFactory.create(AppModule);
  const config = app.get<ConfigService>(ConfigService);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  setupSwagger(app, config.getUsersForBasicAuth());
  await app.listen(config.getVariable(EnvVariablesKey.REST_API_PORT));
})();
