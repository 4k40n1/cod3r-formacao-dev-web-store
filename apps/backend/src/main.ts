import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestApplicationOptions } from '@nestjs/common';

const AppOptions: NestApplicationOptions = {
  cors: true,
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, AppOptions);
  await app.listen(3001);
}
bootstrap();
