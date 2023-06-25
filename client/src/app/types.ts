import { IQuestion } from '@shared/interfaces';

export type ISurveyStoreState = {
  name: string;
  questions: IQuestion[];
};
