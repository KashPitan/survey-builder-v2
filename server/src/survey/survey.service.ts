import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class SurveyService {
  constructor(private prismaService: PrismaService) {}

  async getSurvey(id: number) {
    const survey = await this.prismaService.survey.findUniqueOrThrow({
      where: { id },
      include: { questions: true },
    });
    console.log(survey);

    return survey;
  }

  async addSurvey(survey: Prisma.SurveyCreateInput) {
    console.log(survey);
    const res = await this.prismaService.survey.create({
      data: {
        name: survey.name,
        questions: { create: survey.questions?.create },
      },
    });
    console.log(res);
    return res;
  }
}
