import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('survey_submitted')
  handleSurveySubmitted(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log('survey submitted data - ', data);
  }
}
