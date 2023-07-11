import {
  BadRequestException,
  Body,
  Controller,
  Post,
  Res,
} from '@nestjs/common';
import { AnswersService } from './answers.service';
import { Response } from 'express';

@Controller('answers')
export class AnswersController {
  constructor(private answersService: AnswersService) {}

  @Post()
  async postSurvey(@Body() body: any, @Res() res: Response) {
    console.log('test');
    try {
      const serviceResponse = this.answersService.addAnswers();
      res.status(200).send({ res: serviceResponse });
    } catch (error) {
      console.log(error);
      res.status(200).send();

      throw new BadRequestException();
    }
  }
}
