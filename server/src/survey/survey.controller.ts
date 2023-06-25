import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Query,
  Res,
  ParseIntPipe,
  UsePipes,
} from '@nestjs/common';
import { Response } from 'express';
import { SurveyService } from './survey.service';
import { ZodValidationPipe } from 'src/pipes/zod.pipe';
import SurveySchema from 'shared/schemas/survey.schema';
import { Survey as SurveyModel } from '@prisma/client';

@Controller('surveys')
export class SurveyController {
  constructor(private surveyService: SurveyService) {}

  @Get()
  async getSurvey(@Query('id', ParseIntPipe) id: number) {
    try {
      return await this.surveyService.getSurvey(id);
    } catch (error) {
      console.log(error);
      throw new BadRequestException();
    }
  }

  @UsePipes(new ZodValidationPipe(SurveySchema))
  @Post()
  async postSurvey(@Body() body: SurveyModel, @Res() res: Response) {
    console.log(body);
    try {
      const serviceResponse = await this.surveyService.addSurvey(body);
      res.status(200).send({ res: serviceResponse });
    } catch (error) {
      console.log(error);
      throw new BadRequestException();
    }
  }
}
