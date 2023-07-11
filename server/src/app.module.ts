import { Module } from '@nestjs/common';
import { SurveyController } from './survey/survey.controller';
import { SurveyService } from './survey/survey.service';
import { PrismaService } from './services/prisma.service';
import { AnswersController } from './answers/answers.controller';
import { AnswersService } from './answers/answers.service';

@Module({
  imports: [],
  controllers: [SurveyController, AnswersController],
  providers: [SurveyService, PrismaService, AnswersService],
})
export class AppModule {}
