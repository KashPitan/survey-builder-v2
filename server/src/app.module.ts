import { Module } from '@nestjs/common';
import { SurveyController } from './survey/survey.controller';
import { SurveyService } from './survey/survey.service';
import { PrismaService } from './services/prisma.service';

@Module({
  imports: [],
  controllers: [SurveyController],
  providers: [SurveyService, PrismaService],
})
export class AppModule {}
