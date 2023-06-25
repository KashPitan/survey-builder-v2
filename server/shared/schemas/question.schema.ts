import { z } from 'zod';
import { QuestionType } from '@prisma/client';

export const QuestionTypeValues = Object.values(QuestionType);

const QuestionSchema = z.object({
  question: z.string().min(3),
  type: z.enum(QuestionTypeValues as [string, ...string[]]),
  options: z.array(z.string()).optional(),
});

export default QuestionSchema;
