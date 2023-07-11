import { createSlice } from '@reduxjs/toolkit';
import { ISurveyStoreState } from '@/types';
import { QuestionType } from '@/constants';
import { IQuestion } from '@shared/interfaces';

const initialState: ISurveyStoreState = { name: '', questions: [] };
export const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    // TODO: one reducer function to add questions
    addMultiOptionSingleSelectQuestion(state, action) {
      const newQuestion: IQuestion = {
        question: action.payload.question,
        type: QuestionType.MULTI_OPTION_SINGLE_SELECT,
        options: action.payload.optionsList,
      };
      state.questions = [...state.questions, newQuestion];
    },
    // TODO: add type to action
    addShortTextQuestion(state, action) {
      const newQuestion: IQuestion = {
        question: action.payload.question,
        type: QuestionType.SHORT_TEXT,
      };
      state.questions = [...state.questions, newQuestion];
    },
    setSurveyName(state, action) {
      // console.log(action.payload);
      state.name = action.payload;
    },
    clearSurvey(state) {
      state.questions = [];
      state.name = '';
    },
  },
});

export const {
  addMultiOptionSingleSelectQuestion,
  addShortTextQuestion,
  setSurveyName,
  clearSurvey,
} = surveySlice.actions;

export default surveySlice.reducer;
