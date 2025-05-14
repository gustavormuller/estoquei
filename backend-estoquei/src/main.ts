import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configDotenv } from 'dotenv';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
configDotenv({
  path: './secrets/.env', 
});

  console.log('DB Host:', process.env.DB_HOST);
  console.log('DB Password:', process.env.DB_PASSWORD);
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
  console.log(process.env.DB_HOST);
}
bootstrap();
