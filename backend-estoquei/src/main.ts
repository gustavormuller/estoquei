import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configDotenv } from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  configDotenv({
    path: './secrets/.env', 
  });

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, 
      whitelist: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Estoquei API')
    .setDescription('API para o Estoquei')
    .setVersion('1.0')
    .addTag('estoquei')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
