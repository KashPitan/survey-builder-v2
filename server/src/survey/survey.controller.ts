import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Query,
  Param,
  Res,
  ParseIntPipe,
  UsePipes,
} from '@nestjs/common';
import { Response } from 'express';
import { SurveyService } from './survey.service';
import { ZodValidationPipe } from 'src/pipes/zod.pipe';
import SurveySchema from 'shared/schemas/survey.schema';
import { ISurvey } from 'shared/interfaces/shared-interfaces';

@Controller('surveys')
export class SurveyController {
  constructor(private surveyService: SurveyService) {}

  @Get(':id')
  async getSurvey(@Param('id', ParseIntPipe) id: number) {
    try {
      console.log(id);
      return await this.surveyService.getSurvey(id);
    } catch (error) {
      console.log(error);
      throw new BadRequestException();
    }
  }

  @Get()
  async getAllSurveys() {
    try {
      return await this.surveyService.getAllSurveys();
    } catch (error) {
      console.log(error);
      throw new BadRequestException();
    }
  }

  @UsePipes(new ZodValidationPipe(SurveySchema))
  @Post()
  async postSurvey(@Body() body: ISurvey, @Res() res: Response) {
    try {
      const serviceResponse = await this.surveyService.addSurvey(body);
      res.status(200).send({ res: serviceResponse });
    } catch (error) {
      console.log(error);
      throw new BadRequestException();
    }
  }
}
