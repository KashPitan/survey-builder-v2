import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  let port: number | string = 4000;
  let hostName = 'localhost';

  if (process.env.NODE_ENV === 'production' && process.env.PORT) {
    hostName = '0.0.0.0';
    port = process.env.PORT;
  }

  console.log(hostName, port);
  app.enableCors({ origin: 'http://localhost:3000' });
  await app.listen(port, hostName);
}

bootstrap();
