import { Label, Input } from '@/styles';
import { QuestionType } from '../constants';
import { IQuestion } from '@shared/interfaces';

export default class SurveyBuilder {
  private questions: IQuestion[];
  private questionComponents: React.JSX.Element[];
  private count: number;

  constructor(questions: IQuestion[]) {
    this.questions = questions;
    this.questionComponents = [];
    this.count = 0;

    this.build();
  }

  private build() {
    const components = this.questions.map((question) => {
      return this.addQuestionComponent(question);
    });
    this.questionComponents = components;
  }

  getSurveyComponents() {
    return this.questionComponents;
  }

  addQuestionComponent(question: IQuestion) {
    this.count++;
    return (
      <>
        <div>
          <Label htmlFor={`question-${this.count}`}>{question.question}</Label>
          {question.type === QuestionType.SHORT_TEXT &&
            this.addShortTextQuestion()}
          {question.type === QuestionType.MULTI_OPTION_SINGLE_SELECT &&
            this.addMultiOptionSingleSelectQuestion(question)}
        </div>
      </>
    );
  }

  addShortTextQuestion() {
    return (
      <Input
        id={`question-${this.count}`}
        className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      ></Input>
    );
  }

  addMultiOptionSingleSelectQuestion(question: IQuestion) {
    return question.options?.map((option) => {
      return (
        <>
          <label htmlFor={option}> {option}</label>
          <input
            type="radio"
            id={option}
            name={`question-${this.count}-group`}
            value={option}
          ></input>
        </>
      );
    });
  }
}
