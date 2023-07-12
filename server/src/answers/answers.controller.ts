import {
  BadRequestException,
  Body,
  Controller,
  Inject,
  Post,
  Res,
} from '@nestjs/common';
import { AnswersService } from './answers.service';
import { Response } from 'express';
import { ClientProxy } from '@nestjs/microservices';

@Controller('answers')
export class AnswersController {
  constructor(
    private answersService: AnswersService,
    @Inject('EMAIL_SERVICE') private readonly emailClient: ClientProxy,
  ) {}

  @Post()
  async postSurvey(@Body() body: any, @Res() res: Response) {
    console.log('test');
    try {
      const serviceResponse = this.answersService.addAnswers();
      // TODO: add schema for rmq event
      //TODO add this to email service?
      this.emailClient.emit('survey_submitted', 'test@test.co.uk');

      res.status(200).send({ res: serviceResponse });
    } catch (error) {
      console.log(error);
      res.status(200).send();

      throw new BadRequestException();
    }
  }
}
