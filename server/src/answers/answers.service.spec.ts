import { Test, TestingModule } from '@nestjs/testing';
import { AnswersService } from './answers.service';

describe('AnswersService', () => {
  let provider: AnswersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnswersService],
    }).compile();

    provider = module.get<AnswersService>(AnswersService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
