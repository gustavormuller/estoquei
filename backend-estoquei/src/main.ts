import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configDotenv } from 'dotenv';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );
  configDotenv({
    path: '../secrets/.env',
  });
  await app.listen(process.env.PORT ?? 3000);
  console.log(process.env.DB_HOST);
}
bootstrap();
