import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const port =
    process.env.NODE_ENV === 'production'
      ? `0.0.0.0:${process.env.PORT}`
      : 4000;
  console.log(port);
  await app.listen(port);
}

bootstrap();
