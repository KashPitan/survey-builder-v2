import { Prisma } from '@prisma/client';
import QuestionSchema from '../schemas/question.schema';
import SurveySchema from '../schemas/survey.schema';
import { z } from 'zod';

export type ISurvey = z.infer<typeof SurveySchema>;
export type IQuestion = z.infer<typeof QuestionSchema>;
const getSurveyParamsSchema = z.object({ id: z.string().regex(/^\d+$/) });

export type ISurveyResponse = Prisma.SurveyGetPayload<{
  include: { questions: true };
}>;

export type IQuestionResponse = Prisma.QuestionGetPayload<
  Record<string, never>
>;
