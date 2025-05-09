import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configDotenv } from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);

  configDotenv({
    path:'../secrets/.env'
  })

  console.log(process.env.DB_HOST)
}
bootstrap();
