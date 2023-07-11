import { Injectable } from '@nestjs/common';

@Injectable()
export class AnswersService {
  addAnswers() {
    console.log('nice :)');
    return 'nice :)';
  }
}
