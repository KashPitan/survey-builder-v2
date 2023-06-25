import { z } from 'zod';
import questionSchema from './question.schema';

const SurveySchema = z.object({
  name: z.string(),
  questions: z.array(questionSchema),
});

export default SurveySchema;
