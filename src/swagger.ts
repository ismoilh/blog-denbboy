import {
  DocumentBuilder,
  OpenAPIObject,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import * as basicAuth from 'express-basic-auth';

export function setupSwagger(
  app: INestApplication,
  users: { [key: string]: string } = {},
) {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Blog API')
    .setDescription('API for managing a blog')
    .setVersion('1.0')
    .build();

  const customOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
      tryItOutEnabled: true,
      filter: true,
    },
  };

  const document: OpenAPIObject = SwaggerModule.createDocument(
    app,
    swaggerConfig,
  );

  SwaggerModule.setup(
    '/docs',
    app.use(
      '/docs',
      basicAuth({
        challenge: true,
        users,
      }),
    ),
    document,
    customOptions,
  );
}
