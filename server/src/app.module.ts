import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { SurveyController } from './survey/survey.controller';
import { SurveyService } from './survey/survey.service';
import { PrismaService } from './services/prisma.service';
import { AnswersController } from './answers/answers.controller';
import { AnswersService } from './answers/answers.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'EMAIL_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'emails_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [SurveyController, AnswersController],
  providers: [SurveyService, PrismaService, AnswersService],
})
export class AppModule {}
