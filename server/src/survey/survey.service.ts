import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { ISurvey } from 'shared/interfaces/shared-interfaces';

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

  async getAllSurveys() {
    const surveys = await this.prismaService.survey.findMany({
      include: { questions: true },
    });
    console.dir(surveys, { depth: 1 });

    return surveys;
  }

  async addSurvey(survey: ISurvey) {
    console.log(survey.questions);
    const res = await this.prismaService.survey.create({
      data: {
        name: survey.name,
        questions: { create: survey.questions },
      },
    });
    console.log(res);
    return res;
  }
}
